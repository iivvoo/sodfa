app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", { templateUrl: "home.html" })
                  .when("/editor/:docId", { templateUrl: "editor.html",
                                      controller: "EditCtrl" })
                   .otherwise({ redirectTo: '/' });
}]);

/*
 * Provide a method to select the active navigation
 */
app.controller('NavCtrl', ['$scope', '$location', 'DocsModel', function($scope, $location, DocsModel) {
    $scope.isActiveRoute = function(path) {
        return $location.path().substr(0, path.length) == path;
    };
    /*
     * clients are loaded async from pouchdb so we need a mechanism
     * to be nodified once the loading is complete
     */
    $scope.$on('docsLoaded', function(event, docs) {
        $scope.items = docs;
    });
}]);

app.controller('AppCtrl', function($scope) {
});

app.controller('EditCtrl', function($scope, DocsModel, $routeParams) {
    var docId = $routeParams.docId;
    var sessionController, session;
    var memberid = "localmember";

    function loadFromArrayBuffer(odfcanvas, data) {
      // overload the global read function with one that only reads
      // the data from this canvas
      var globalreadfunction = runtime.read,
      globalfilesizefunction = runtime.getFileSize,
      overridePath = "arraybuffer";
      runtime.read = function (path, offset, length, callback) {
        if (path !== overridePath) {
          globalreadfunction.apply(runtime,
                                   [path, offset, length, callback]);
        } else {
          callback(null, data.subarray(offset, offset + length));
        }
      };
      runtime.getFileSize = function (path, callback) {
        if (path !== overridePath) {
          globalfilesizefunction.apply(runtime, [path, callback]);
        } else {
          callback(data.length);
        }
      };
      odfcanvas.load(overridePath);
    }

    function loadFromData(data) {
        var odfelement = $("#odf").get(0);
        odfcanvas = new odf.OdfCanvas(odfelement);
        $scope.canvas = odfcanvas;

        var buf = new ArrayBuffer(data.length);
        var bufView = new Uint8Array(buf);
        var i;

        for(i=0, len=data.length; i<len; i++) {
          bufView[i] = data.charCodeAt(i);
        }
        loadFromArrayBuffer(odfcanvas, bufView);

        session = new ops.Session(odfcanvas);
        var shadowCursor = new gui.ShadowCursor(session.getOdtDocument());

        sessionController = new gui.SessionController(session,
                                      memberid, shadowCursor,
                                      {directStylingEnabled: true});
        var caretManager = new gui.CaretManager(sessionController);
        var selectionViewManager = new gui.SelectionViewManager(
                                       gui.SvgSelectionView);


        var sessionView = new gui.SessionView({
                editInfoMarkersInitiallyVisible: false,
                caretAvatarsInitiallyVisible: false,
                caretBlinksOnRangeSelect: true
                                              }, memberid, session,
                                              caretManager,
                                              selectionViewManager);
        selectionViewManager.registerCursor(shadowCursor, true);

        var addMember = new ops.OpAddMember();
        addMember.init({
          memberid: memberid,
          setProperties: {
              fullname: "John Doe",
              color: "red",
              imageUrl: "/static/avatar-joe.png"
          }
        });
        session.enqueue([addMember]);

        sessionController.startEditing();

    }
    var title, _rev;

    DocsModel.get(docId, function(err, doc) {
        loadFromData(doc.data);
        title = doc.title;
        _rev = doc._rev;
        $scope.document_id = docId;
        $scope.document_title = doc.title;
    });

    $scope.saveDoc = function() {
        var ctr = $scope.canvas.odfContainer();
        ctr.createByteArray(function(ba) {
            var s = String.fromCharCode.apply(null, ba);
            DocsModel.put(docId, _rev, title, s);
        },
        function(err) {});
    };

    $scope.boldSelection = function() {
        var fmt = sessionController.getDirectFormattingController();
        fmt.setBold(!fmt.isBold());
    };

    $scope.italicSelection = function() {
        var fmt = sessionController.getDirectFormattingController();
        fmt.setItalic(!fmt.isItalic());
    };
});

/*
 * DocsModel provides an interface to the docPouch database (client
 * specific stuff). For demonstration purposes, some static data is also
 * included
 */
app.factory('DocsModel', ['$rootScope', 'docPouch',
            function ($rootScope, docPouch) {

    /* working set, will contain static + pouchdata */
    var documents = [];

    var db = docPouch;
    var i;

    for(i = 0; i < 10; i++) {
        db.put({
            _id: "demo" + i + ".odf",
            title: "Demo " + i,
            data: docdata
        });
    }
    /*
     * async retrieval of all docs (no filtering), add them to the
     * documents working set. Once done, send broadcast event
     */
    db.allDocs({include_docs: true}, function(err, response) {
        var i;
        for(i = 0; i < response.rows.length; i++) {
          var doc = response.rows[i].doc;
          documents.push({id:doc._id, title:doc.title});
        }
        /*
         * broadcast the "docsLoaded" event so subscribed scope(s)
         * can update
         */
        $rootScope.$apply(function() {
            $rootScope.$broadcast("docsLoaded", documents);
        });
    });

    return {
        docs:function() {
            return documents;
        },
        get: function(docid, callback) {
            db.get(docid, callback);
        },
        put: function(docid, rev, title, data) {
            db.put({
                _id: docid,
                _rev: rev,
                title: title,
                data: data
            });
        }
    };
}]);


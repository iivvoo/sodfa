app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", { templateUrl: "home.html" })
                  .when("/editor", { templateUrl: "editor.html",
                                      controller: "EditCtrl" })
                   .otherwise({ redirectTo: '/' });
}]);

/*
 * Provide a method to select the active navigation
 */
app.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActiveRoute = function(path) {
        return $location.path().substr(0, path.length) == path;
    };
}]);

app.controller('AppCtrl', function($scope, Page) {
    Page.setTitle("Loading");
});

app.controller('EditCtrl', function($scope, Page, DocsModel) {
    Page.setTitle("Editor");
    $scope.listtype = "Editor";

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
        var buf = new ArrayBuffer(data.length);
        var bufView = new Uint8Array(buf);
        var i;

        for(i=0, len=data.length; i<len; i++) {
          bufView[i] = data.charCodeAt(i);
        }
        loadFromArrayBuffer(odfcanvas, bufView);

        var session = new ops.Session(odfcanvas);
        var shadowCursor = new gui.ShadowCursor(session.getOdtDocument());

        var sessionController = new gui.SessionController(session, "localmember", shadowCursor, {directStylingEnabled: true});
        var caretManager = new gui.CaretManager(sessionController);
        var selectionViewManager = new gui.SelectionViewManager(gui.SvgSelectionView);

        var sessionView = new gui.SessionView({}, "memberid", session, caretManager, selectionViewManager);

        var addMember = new ops.OpAddMember();
        addMember.init({
          memberid: "localmember",
          setProperties: {
              fullname: "John Doe",
              color: "red",
              imageUrl: null
          }
        });
        session.enqueue([addMember]);

        sessionController.startEditing();
    }

    DocsModel.get('demo.odf', function(err, doc) {
        loadFromData(doc.data);
    });
    /*
     * clients are loaded async from pouchdb so we need a mechanism
     * to be nodified once the loading is complete
     */
    $scope.$on('docsLoaded', function(event, clienten) {
        $scope.items = clienten;
    });
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

    db.put({
        _id: "demo.odf",
        title: "Demo",
        data: docdata
    });
    /*
     * async retrieval of all docs (no filtering), add them to the
     * documents working set. Once done, send broadcast event
     */
    db.allDocs({include_docs: true}, function(err, response) {
        var i;
        for(i = 0; i < response.rows.length; i++) {
          var doc = response.rows[i].doc;
          documents.push({id:i+10, name:doc.text, detail:doc.text});
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
    };
}]);


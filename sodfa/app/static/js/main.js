/*
 * Register the ui.bootstrap bootstrap/angular integration module;
 * change the interpolation symbols since {{ }} conflicts with django
 * templating
 */
app = angular.module('app', ['ngRoute', 'ui.bootstrap'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});

/*
 * Wrap the pouchdb in an object that stores replication results,
 * can cancel replication and can restart replication
 */

/* Setup local pouchdb with twoway sync */
app.factory('docPouch', function($rootScope) {

  var mydb = new PouchDB("doccouch");
  /* for some reason, $rootScope.appcfg is magically wrapped and doesn't
   * give us real strings. Force the attribute into a string
   */
  var usercouch = $rootScope.appcfg.couchdb + '';
  //repl_to = mydb.replicate.to(usercouch, {continuous: true});
  //repl_from = mydb.replicate.from(usercouch, {continuous: true});
  return mydb;

});


app.controller('RootCtrl', function($scope, Page) {
    $scope.page = Page;
});

app.factory('Page', function($rootScope){
    var pageTitle = "Untitled";
    return {
        title:function(){
            return pageTitle;
        },
        setTitle:function(newTitle){
            pageTitle = newTitle;
        }
    }
});

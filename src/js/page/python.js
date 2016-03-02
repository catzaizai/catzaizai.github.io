/**
 * Created by catzaizai on 2016/3/2.
 */

angular.module('python', []).controller('pythonCtrl', function($scope, $http) {
    $scope.data = [];
    $scope.loadData = function(){
        $http.get("/catzaizai.github.io/database/python/index.json").success(function(result){
            $scope.data = result;
        })
    };
    $scope.getBackground = function(img){
        return {'background-image': 'url('+ img +')'}
    };
    $scope.redirection = function(href){
        window.location.href = href;
    }
});
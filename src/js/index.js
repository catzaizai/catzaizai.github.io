/**
 * Created by catzaizai on 2016/2/26.
 */
/** Depend angularJs **/


angular.module('index', []).controller('indexCtrl', function($scope, $http) {
    $scope.data = [];
    $scope.loadData = function(){
        $http.get("/catzaizai.github.io/database/index.json").success(function(result){
            $scope.data = result;
        })
    };
    $scope.getBackground = function(img){
        return {'background-image': 'url('+ img +')'}
    }
});

/**
 * Created by 猫崽崽 on 1/3/2016.
 */

angular.module('dotNet', []).controller('dotNetCtrl', function($scope, $http) {
    $scope.data = [];
    $scope.loadData = function(){
        $http.get("/catzaizai.github.io/database/dotNet/index.json").success(function(result){
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
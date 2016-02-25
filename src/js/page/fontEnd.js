/**
 * Created by catzaizai on 2016/2/26.
 */
/** Depend angularJs **/

(function(angular){
    angular.module('fontEnd', []).controller('fontEndCtrl', function($scope, $http) {
        $scope.loadData = function(){
            $http.get("/api/data.json")
        }
    });
})(angular);
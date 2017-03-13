/**
 * Created by xmg on 2017/3/12.
 */
angular.module('app').controller('detailCtrl',['$stateParams','$scope',function ($stateParams,$scope) {

    $scope.back = function () {
        window.history.back();
    };

    //$scope.dataItem  = $scope.dataList[$stateParams.id];
    //console.log($scope.dataItem);
    $scope.dataItem = $scope.dataList[$stateParams.id];
    console.log($scope.dataItem);



}]);
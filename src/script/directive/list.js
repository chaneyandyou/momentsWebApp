angular.module('app').directive('appList',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'../view/template/list.html'
    }
}]);
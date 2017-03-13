angular.module('app').controller('mainCtrl',['$scope','httpTool','$state',function ($scope,httpTool,$state) {
  //http://localhost:9999/#!/home
    /*从1.6之后,跨域要设置白名单
    * 1.设置method：jsonp就可以，不要添加callback
    * */
    var url = "http://localhost/home.php";
    $scope.isLoading = true;
    httpTool.getData({
        url:url,
        method:'jsonp',
        params:null
    },function (res) {
        $scope.dataList = res.posts;
        $scope.isLoading = false;
    },function (error) {
        $scope.isLoading = false;
    });
    $state.go('main.list');


}]);

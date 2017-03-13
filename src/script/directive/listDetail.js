angular.module('app').directive('detail',function () {

    return{
        restrict:'A',
        replace:false,
        /*
         * $scope:作用域
         * $jqLite:jQuery对象
         * $attrs:获取属性属性
         * */
        link:function ($scope,$jqLite,$attrs) {
            $jqLite.html($attrs.detail);
        }
    }

});
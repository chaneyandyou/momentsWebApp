angular.module('app').directive('appNav', [function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'../view/template/nav.html',
        link:function ($scope,$jqLite,$attrs) {
            $jqLite.find('span').html($attrs.appNav);
            if ($attrs.ishidden == "true"){
                $jqLite.find('em').css({display:'none'});
            }
        }
    }
}]);

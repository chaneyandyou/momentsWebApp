'use strict';
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'view/main.html',
            controller: 'mainCtrl'
        })
            .state('main.list', {
                url: '/main.list',
                template: '<div app-list></div>',
                controller: 'mainCtrl'
            })
            .state('main.detail', {
                url: '/detail/:id',
                templateUrl: 'view/template/listDetail.html',
                controller: "detailCtrl"
            })
        $urlRouterProvider.otherwise('main');

    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('author', {
            url: '/author',
            templateUrl: "view/author.html"
        });
    }])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('content', {
            url: '/author',
            templateUrl: "view/content.html"
        });
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('my', {
            url: '/my',
            templateUrl: "view/my.html"
        });
    }])
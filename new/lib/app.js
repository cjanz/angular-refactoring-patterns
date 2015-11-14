System.register(['angular', './github.service', './repoList.component', './main.component'], function(exports_1) {
    var angular, github_service_1, repoList_component_1, main_component_1;
    var module;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (repoList_component_1_1) {
                repoList_component_1 = repoList_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            }],
        execute: function() {
            module = angular.module('myApp', [])
                .service('gitHubService', github_service_1.default)
                .directive('repoList', repoList_component_1.default)
                .directive('mainApp', main_component_1.default)
                .run(function () {
                console.log('Angular running');
            });
            angular.bootstrap(window.document.body, [module.name]);
        }
    }
});

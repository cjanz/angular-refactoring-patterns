//app.ts
import angular = require('angular');

import GitHubService from './github.service';
import RepoListComponent from './repoList.component';
import MainComponent from './main.component';

let module = angular.module('myApp', [])
    .service('gitHubService', GitHubService)
    .directive('repoList', RepoListComponent)
    .directive('mainApp', MainComponent)
    .run(() => {
        console.log('Angular running');
    });

angular.bootstrap(window.document.body, [module.name]);

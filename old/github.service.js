angular.module('myTestApp')
    .factory('gitHubService', function ($http) {

        function buildRepoUrl(userId) {
            return 'https://api.github.com/users/' + userId + '/repos';
        }

        function getRepos(userId) {
            return $http.get(buildRepoUrl(userId))
                .then(function (result) {
                    return result.data;
                });
        }

        return {
            getRepos: getRepos
        }

    });

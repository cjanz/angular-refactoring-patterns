angular.module('myTestApp')
    .controller('RepoListCtrl', function ($scope, gitHubService) {

        $scope.$watch('userId', function (newUserId) {

            gitHubService.getRepos(newUserId)
                .then(function (result) {
                    $scope.repos = result.map(function (repo) {
                        return repo.name;
                    });
                });

        });
    });


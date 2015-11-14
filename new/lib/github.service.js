System.register([], function(exports_1) {
    var GitHubService;
    return {
        setters:[],
        execute: function() {
            GitHubService = (function () {
                function GitHubService($http) {
                    this.$http = $http;
                }
                GitHubService.prototype.buildRepoUrl = function (userId) {
                    return "https://api.github.com/users/" + userId + "/repos";
                };
                GitHubService.prototype.getRepos = function (userId) {
                    return this.$http.get(this.buildRepoUrl(userId))
                        .then(function (result) {
                        return result.data;
                    });
                };
                return GitHubService;
            })();
            exports_1("default", GitHubService);
        }
    }
});

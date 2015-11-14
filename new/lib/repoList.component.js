System.register([], function(exports_1) {
    var RepoListCtrl;
    function default_1() {
        return {
            template: "<ul><li ng-repeat=\"repo in repoListCtrl.repos\" ng-click=\"repoListCtrl.selectRepo(repo)\">{{repo}}</li></ul>",
            restrict: 'E',
            controller: RepoListCtrl,
            controllerAs: 'repoListCtrl',
            bindToController: {
                userId: '=',
                onSelectRepo: '&'
            },
            scope: {},
        };
    }
    exports_1("default", default_1);
    return {
        setters:[],
        execute: function() {
            RepoListCtrl = (function () {
                function RepoListCtrl(gitHubService) {
                    this.gitHubService = gitHubService;
                    this.loadRepos();
                }
                RepoListCtrl.prototype.loadRepos = function () {
                    var _this = this;
                    if (!this._userId) {
                        return;
                    }
                    this.gitHubService.getRepos(this._userId)
                        .then(function (repos) {
                        _this.repos = repos.map(function (repo) { return repo.name; });
                    });
                };
                Object.defineProperty(RepoListCtrl.prototype, "userId", {
                    get: function () {
                        return this._userId;
                    },
                    set: function (id) {
                        var oldValue = this._userId;
                        this._userId = id;
                        if (this.gitHubService && oldValue !== id) {
                            this.loadRepos();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                RepoListCtrl.prototype.selectRepo = function (repo) {
                    this.onSelectRepo({ repo: repo });
                };
                return RepoListCtrl;
            })();
        }
    }
});

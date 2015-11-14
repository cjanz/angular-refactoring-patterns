System.register([], function(exports_1) {
    var MainController;
    function default_1() {
        return {
            template: "\n            <main>\n                <repo-list user-id=\"mainCtrl.userId\" on-select-repo=\"mainCtrl.onSelectRepo(repo)\"></repo-list>\n                <div>\n                    Selected Repo: {{mainCtrl.selectedRepo}}\n                </div>\n            </main>\n            ",
            restrict: 'E',
            controller: MainController,
            controllerAs: 'mainCtrl',
            bindToController: true,
            scope: {},
        };
    }
    exports_1("default", default_1);
    return {
        setters:[],
        execute: function() {
            MainController = (function () {
                function MainController() {
                    this.userId = 'bridgingIT';
                    this.selectedRepo = '';
                }
                MainController.prototype.onSelectRepo = function (repo) {
                    this.selectedRepo = repo;
                };
                return MainController;
            })();
        }
    }
});

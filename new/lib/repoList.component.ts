import GitHubService from './github.service';

class RepoListCtrl {

    private _userId: string;
    public repos: string[];
    public onSelectRepo: Function;

    constructor(private gitHubService: GitHubService) {
        this.loadRepos();
    }

    private loadRepos(): void {
        if (!this._userId) {
            return;
        }

        this.gitHubService.getRepos(this._userId)
            .then((repos: any[]) => {
                this.repos = repos.map((repo: any) => repo.name);
            })
    }

    public get userId() {
        return this._userId;
    }

    public set userId(id: string) {
        let oldValue = this._userId;
        this._userId = id;

        if (this.gitHubService && oldValue !== id) {
            this.loadRepos();
        }
    }

    public selectRepo(repo): void {
        this.onSelectRepo({repo: repo});
    }

}

export default function () {

    return {
        template: `<ul><li ng-repeat="repo in repoListCtrl.repos" ng-click="repoListCtrl.selectRepo(repo)">{{repo}}</li></ul>`,
        restrict: 'E',
        controller: RepoListCtrl,
        controllerAs: 'repoListCtrl',
        bindToController: {
            userId: '=',
            onSelectRepo: '&'
        },
        scope: {},
    }

}


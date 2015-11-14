class MainController {

    public userId: string = 'bridgingIT';
    public selectedRepo: string = '';

    public onSelectRepo(repo: string) {
        this.selectedRepo = repo;
    }

}

export default function () {

    return {
        template: `
            <main>
                <repo-list user-id="mainCtrl.userId" on-select-repo="mainCtrl.onSelectRepo(repo)"></repo-list>
                <div>
                    Selected Repo: {{mainCtrl.selectedRepo}}
                </div>
            </main>
            `,
        restrict: 'E',
        controller: MainController,
        controllerAs: 'mainCtrl',
        bindToController: true,
        scope: {},
    }

}
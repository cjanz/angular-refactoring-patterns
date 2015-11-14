export default class GitHubService {

    constructor(private $http: angular.IHttpService) {
    }

    private buildRepoUrl(userId: string): string {
        return `https://api.github.com/users/${userId}/repos`;
    }

    public getRepos(userId: string): any {
        return this.$http.get(this.buildRepoUrl(userId))
            .then(function (result) {
                return result.data;
            });
    }

}
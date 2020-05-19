class GitHub {
    constructor() {
        this.client_id = '4b652d78812eea4b0aec';
        this.client_secret = 'cade999a657f8b1c18db80348e360ccab7cf1e1b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=created&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile, repos
        }
    }
}
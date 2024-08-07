import { githubApi } from "../api/github.api";
// import { sleep } from "../helpers/sleep";
import { GithubIssue } from "../issues/interfaces/issue.interface";


export const getIssue = async(issueNumber: number):Promise<GithubIssue> => {
    // await sleep(1);
  
    const {data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);

    console.log(data);

    return data;
}

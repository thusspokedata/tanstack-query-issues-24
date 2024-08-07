import { githubApi } from '../api/github.api';
// import { sleep } from "../helpers/sleep";
import { GithubIssue } from '../issues/interfaces/issue.interface';

export const getIssues = async (): Promise<GithubIssue[]> => {
  // await sleep(1);

  const { data } = await githubApi.get<GithubIssue[]>('/issues');

  return data;
};

import { githubApi } from '../api/github.api';
import { sleep } from '../helpers';
import { GithubIssue, State } from '../issues/interfaces';



export const getIssues = async (state: State): Promise<GithubIssue[]> => {
  await sleep(1);

  const params = new URLSearchParams(); // esto no hace falta importarlo, ya que es una clase nativa de JS

  if (state !== State.All) {
    params.append('state', state);
  }

  const { data } = await githubApi.get<GithubIssue[]>('/issues', {
    params
  });

  return data;
};

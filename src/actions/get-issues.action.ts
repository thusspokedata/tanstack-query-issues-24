import { githubApi } from '../api/github.api';
import { sleep } from '../helpers';
import { GithubIssue, State } from '../issues/interfaces';



export const getIssues = async (state: State, selectedLabels: string[]): Promise<GithubIssue[]> => {
  await sleep(1);

  const params = new URLSearchParams(); // esto no hace falta importarlo, ya que es una clase nativa de JS
  console.log("params4", params)

  if (state !== State.All) {
    params.append('state', state);
  }

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  params.append('per_page', '5'); 

  const { data } = await githubApi.get<GithubIssue[]>('/issues', {
    params
  });

  return data;
};

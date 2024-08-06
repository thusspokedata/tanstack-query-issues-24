import { githubApi } from "../api/github.api";
import { sleep } from "../helpers/sleep";
import { GithubLabel } from "../issues/interfaces/label.interface";


export const getLabels = async():Promise<GithubLabel[]> => {
    await sleep(1);
  
    const {data } = await githubApi.get<GithubLabel[]>('/labels');
    // const resp = await fetch('https://api.github.com/repos/facebook/react/labels').then(r => r.json());
  
    // console.log(data);
    return data;
}


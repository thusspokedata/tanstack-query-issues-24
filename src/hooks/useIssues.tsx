import { useQuery } from "@tanstack/react-query";
import { State } from "../issues/interfaces";
import { getIssues } from "../actions";


interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: UseIssuesProps) => {
  const issuesQuery = useQuery({
    queryKey: ['issues', {state, label: selectedLabels}],
    queryFn: () => getIssues(state, selectedLabels),
    staleTime: 1000 * 60, // 1 minute
  });

  return { issuesQuery };
};

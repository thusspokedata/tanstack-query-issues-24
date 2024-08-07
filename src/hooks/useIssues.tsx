import { useQuery } from "@tanstack/react-query";
import { State } from "../issues/interfaces";
import { getIssues } from "../actions";


interface UseIssuesProps {
  state: State;
}

export const useIssues = ({ state }: UseIssuesProps) => {
  const issuesQuery = useQuery({
    queryKey: ['issues', {state}],
    queryFn: () => getIssues(state),
    staleTime: 1000 * 60, // 1 minute
  });

  return { issuesQuery };
};

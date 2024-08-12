import { useQuery } from '@tanstack/react-query';
import { State } from '../issues/interfaces';
import { getIssues } from '../actions';
import { useEffect, useState } from 'react';

interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: UseIssuesProps) => {
  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, label: selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60, // 1 minute
  });

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [selectedLabels]);

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  return {
    issuesQuery,
    //Getters
    page,
    //Actions
    nextPage,
    previousPage,
  };
};

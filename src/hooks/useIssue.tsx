import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/get-issue.action";


export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery({
        queryKey: ['issues', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60, // 1 minute
        retry: false
    });

    
    return {issueQuery}
};
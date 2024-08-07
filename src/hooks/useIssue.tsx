import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/get-issue.action";
import { getIssueComments } from "../actions/get-issue.comments";


export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery({
        queryKey: ['issues', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60, // 1 minute
    });

    // const commentsQuery = useQuery({
    //     queryKey: ['issues', issueNumber, "comments"],
    //     queryFn: () => getIssueComments(issueNumber),
    //     staleTime: 1000 * 60, // 1 minute
    // });

    const commentsQuery = useQuery({
        queryKey: ['issues', issueQuery.data?.number, "comments"],
        queryFn: () => getIssueComments(issueQuery.data!.number),
        staleTime: 1000 * 60, // 1 minute
        enabled: issueQuery.data !== undefined,
        // enabled: !!issueQuery.data (es lo mismo que la linea de arriba),
    });

    
    return {issueQuery, commentsQuery}
};
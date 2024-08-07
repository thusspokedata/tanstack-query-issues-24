import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { FiSkipBack } from 'react-icons/fi';
import { useIssue } from '../../hooks';
import { IssueComment } from '../components';
import { LoadingSpinner } from '../../shared';

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();


  const issueNumber = Number(params.id ?? 0);

  const { issueQuery, commentsQuery } = useIssue(issueNumber);

  if (issueQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!issueQuery.data) {
    return <Navigate to="/issues/list" />;
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      
      <IssueComment issue={issueQuery.data} />

      {
        commentsQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          commentsQuery.data?.map((comment) => (
            <IssueComment key={comment.id} issue={comment} />
          ))
        )
      }

  
    </div>
  );
};

import { useIssues } from '../../hooks/useIssues';
import { LoadingSpinner } from '../../shared/components/LoadingSpinner';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';

export const ListView = () => {

  const  {issuesQuery} = useIssues();

  const issues = issuesQuery.data ?? [];
  // el isLoading va a mostrarse si no tenemos datos en cache, si tenemos datos en cache no se va a mostrar. Esa es la diferencia con el isFetching

  return (

    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">

        {issuesQuery.isLoading ? <LoadingSpinner /> :  <IssueList issues={issues} />} 
       
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  );
};

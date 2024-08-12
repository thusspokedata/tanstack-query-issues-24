import { useState } from 'react';
import { State } from '../interfaces';
import { IssueList, LabelPicker } from '../components';
import { LoadingSpinner } from '../../shared';
import { useIssuesInfinite } from '../../hooks';

export const ListViewInfinite = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { issuesQuery } = useIssuesInfinite({
    state,
    selectedLabels,
  });

  const issues = issuesQuery.data ?? [];
  // el isLoading va a mostrarse si no tenemos datos en cache, si tenemos datos en cache no se va a mostrar. Esa es la diferencia con el isFetching

  const onLabelSelected = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((l) => l !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col justify-center">
            <IssueList issues={issues} onStateChange={setState} state={state} />

            <button className="btn p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all">
              Cargar más...
            </button>
          </div>
        )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
          onLabelSelected={onLabelSelected}
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  );
};

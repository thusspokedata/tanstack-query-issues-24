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

  // inicialmente la info era un array de arrays, [ [1,2,3], [4,5,6] ]
  // pero ahora es un array de objetos, por eso se usa flat para aplanar el array
  // ejemplo: [ {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6} ]
  const issues = issuesQuery.data?.pages.flat() ?? [];
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

            <button
              onClick={() => issuesQuery.fetchNextPage()}
              disabled={!issuesQuery.hasNextPage || issuesQuery.isFetchingNextPage}
              className="btn p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all disabled:bg-gray-500"
            >
              {issuesQuery.isFetchingNextPage
                ? 'Cargando...'
                : issuesQuery.hasNextPage
                ? 'Cargar más'
                : 'No hay más issues'}
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

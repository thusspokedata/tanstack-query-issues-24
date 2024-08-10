import { useLabels } from '../../hooks';
import { LoadingSpinner } from '../../shared';

interface LabelPickerProps {
  selectedLabels: string[];
  onLabelSelected: (label: string) => void;
}

export const LabelPicker = ({
  selectedLabels,
  onLabelSelected,
}: LabelPickerProps) => {
  const { labelsQuery } = useLabels();

  console.log(labelsQuery)

  if (labelsQuery.isLoading) {
    return (
      <span className="flex justify-center items-center h-52">
        <LoadingSpinner />
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-start">
      {labelsQuery.data?.map((label) => (
        <span
          onClick={() => onLabelSelected(label.name)}
          key={label.id}
          className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer ${
            selectedLabels.includes(label.name) ? 'selected-label' : ''
          }`}
          style={{ border: `1px solid #${label.color}`, color: '#fff' }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};

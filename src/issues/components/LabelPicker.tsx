import { useLabels } from "../../hooks";
import { LoadingSpinner } from "../../shared";




export const LabelPicker = () => {

  const {labelsQuery}  = useLabels();

 

  if(labelsQuery.isLoading) {
    return <span className="flex justify-center items-center h-52"><LoadingSpinner/></span>
  }
  return (
    <div className="flex flex-wrap gap-2 justify-start">
    {
      labelsQuery.data?.map(label => (
        <span
          key={label.id}
          className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${label.color}`, color: '#fff' }}
        >
          {label.name}
        </span>
      ))
    }
    </div>
  );
};

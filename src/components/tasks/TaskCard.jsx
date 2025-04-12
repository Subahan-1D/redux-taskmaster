import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/features/task/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1 className="text-lg font-semibold mb-3">{task.title}</h1>
      <p className="mb-3">{task.description}</p>
      <p className="text-sm">Assigned To --{task.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task.date}</p>
        <div className="flex gap-3">
          <button title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500"></TrashIcon>
          </button>
          <button
            title="Update Status"
            // onClick={dispatch(
            //   updateStatus({ id: task.id, status: updatedStatus })
            // )}
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus }))
            }
          >
            <ArrowRightIcon className="text-primary h-5 w-5"></ArrowRightIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

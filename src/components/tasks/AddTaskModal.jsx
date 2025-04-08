import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Student Hero">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter a title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              {...register("Name")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              className="w-full rounded-md"
              id="description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              {...register("date")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-700"
            >
              Assign To
            </label>
            <select
              className="w-full rounded-md"
              id="assignedTo"
              {...register("assignedTo")}
            >
              <option value="Subahan Islam">Subahan Islam</option>
              <option value="Rasif Islam">Rasif Islam</option>
              <option value="Golam Rosul">Golam Rosul</option>
              <option value="Samyo Roy">Samyo Roy</option>
              <option value="Madhob Vai">Madhob Vai</option>
              <option value="Tawhid Vai">Tawhid Vai</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              className="w-full rounded-md"
              {...register("priority")}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              type="submit"
              className="w-full mt-6 btn btn-danger text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTaskModal;

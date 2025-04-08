import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen  }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Student Hero">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod fugiat
          et impedit autem repellat earum nostrum sint ea at praesentium?
        </p>
      </Modal>
    </>
  );
};

export default AddTaskModal;

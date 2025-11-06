const DeleteCompleteButton = ({ hasCompletedTodos, onClick }) => {
  if (hasCompletedTodos) {
    return (
      <button
        onClick={onClick}
        className="bg-red-500 hover:bg-red-600 mt-4 px-4 py-2 rounded text-white transition-colors cursor-pointer"
      >
        Удалить выполненные
      </button>
    );
  }

  return null;
};

export default DeleteCompleteButton;

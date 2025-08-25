import TaskList from "./TaskList";

const Tasks = () => {
  const tasks = [
    { id: 1, text: "Изучить React", completed: true },
    { id: 2, text: "Создать проект", completed: false },
    { id: 3, text: "Развернуть приложение", completed: false },
  ];

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;

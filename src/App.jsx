import { useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const [theme, setTheme] = useState(getInitialTheme());

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      return savedTheme;
    } else if (prefersDark) {
      return "dark";
    } else {
      const hours = new Date().getHours();
      return hours < 6 || hours >= 21 ? "dark" : "light";
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const onDelete = (id) => {
    setTodos((pT) => pT.filter((todo) => todo.id !== id));
  };

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div
      data-theme={theme}
      className="flex flex-col justify-center items-center bg-page-light dark:bg-page-dark p-6 min-h-screen"
    >
      <div className="mb-6">
        <div className="flex items-center cursor-pointer">
          <button className="relative" onClick={toggleTheme}>
            <div className="bg-gray-300 dark:bg-btn-dark shadow-inner rounded-full w-14 h-7 transition-colors duration-300"></div>
            <div className="top-0.5 left-0.5 absolute bg-white shadow-md rounded-full w-6 h-6 transition-transform translate-x-0 dark:translate-x-7 duration-300 transform"></div>
          </button>
          <span className="ml-3 font-medium text-gray-700 dark:text-gray-300">
            {theme === "light" ? "Светлая" : "Темная"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mx-auto">
        <h1 className="mb-8 font-bold text-green-800 dark:text-white text-4xl text-center">
          <span className="bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300 text-transparent">
            My Todo App
          </span>
        </h1>
        <AddTodo onAdd={onAdd} />
        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

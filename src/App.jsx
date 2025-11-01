import { useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import ToggleTheme from "./components/ToggleTheme";
import getInitialTheme from "./helpers/getInitialTheme";

import toggleTheme from "./helpers/toggleTheme";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(getInitialTheme());

  const onAdd = (text, deadline) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(), // fix имени поля
      deadline: deadline || null,
      order: todos.length + 1,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div
      data-theme={theme}
      className="flex flex-col justify-center items-center bg-page-light dark:bg-page-dark p-6 min-h-screen"
    >
      <ToggleTheme toggleTheme={() => toggleTheme(setTheme)} theme={theme} />

      <div className="flex flex-col gap-3 mx-auto">
        <h1 className="mb-8 font-bold text-green-800 dark:text-white text-4xl text-center">
          <span className="bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300 text-transparent">
            My Todo App
          </span>
        </h1>

        <AddTodo onAdd={onAdd} />

        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

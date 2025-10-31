// src/App.jsx
import { lazy, Suspense, useState } from "react";

const TextComponent = lazy(() => import("./components/TextComponent"));
const TodoComponent = lazy(() => import("./components/TodoComponent"));

function App() {
  const [showText, setShowText] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  return (
    <div>
      <h2>1. Загрузка компонента</h2>
      <button onClick={() => setShowText((v) => !v)}>
        {showText ? "Скрыть" : "Показать"} компонент
      </button>
      <Suspense fallback={<div>Загрузка текстового компонента…</div>}>
        {showText && <TextComponent />}
      </Suspense>

      <h2>2. Загрузка компонента списка задач</h2>
      <button onClick={() => setShowTodo((v) => !v)}>
        {showTodo ? "Скрыть" : "Показать"} список задач
      </button>
      <Suspense fallback={<div>Загрузка списка задач…</div>}>
        {showTodo && <TodoComponent />}
      </Suspense>
    </div>
  );
}

export default App;

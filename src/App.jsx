import { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Скрыть компонент" : "Показать компонент"}
      </button>
      {showComponent && <LifecycleDemo />}
    </div>
  );
};

export default App;

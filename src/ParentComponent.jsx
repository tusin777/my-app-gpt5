import { useState, useCallback, useEffect } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(1);

  const memoizedCallback = useCallback(() => {
    console.log("memoizedCallback: count=", count);
  }, [count]);

  useEffect(() => {
    console.log("useEffect: ссылка изменилась");
    memoizedCallback();
  }, [memoizedCallback]);

  return (
    <div>
      <h1>Родительский компонент</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Увеличить count
      </button>
      <ChildComponent onAction={memoizedCallback} />
      <p>otherState: {otherState}</p>
      <button onClick={() => setOtherState(otherState + 1)}>
        Изменить другое состояние
      </button>
    </div>
  );
};

export default ParentComponent;

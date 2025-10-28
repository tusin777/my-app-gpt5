import { useState, useTransition } from "react";

const BasicExample = () => {
  const [isPending, startTransition] = useTransition();

  const [count, setCount] = useState(0);

  const handleClick = () => {
    startTransition(() => setCount((prev) => prev + 1));
  };

  return (
    <div>
      <button onClick={handleClick}>Увеличить счетчик</button>
      <span>{isPending ? "загрузка" : count}</span>
    </div>
  );
};

export default BasicExample;

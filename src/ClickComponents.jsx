import { useEffect } from "react";

const ClickComponents = ({ number, setNumber, count }) => {
  useEffect(() => {
    setNumber(number + 100);
  }, [count]);
  return (
    <>
      <button onClick={() => setNumber(number + 1)}>
        Меняем число {number}
      </button>
    </>
  );
};

export default ClickComponents;

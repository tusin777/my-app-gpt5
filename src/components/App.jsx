import { useRef, useState } from "react";
import Input from "./Input";
import Page from "./Page";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.fn1();
  }

  function handleGetValue() {
    setValue(inputRef.current.fn2());
  }

  // Проверяем, является ли введённая строка допустимым цветом
  function isValidColor(str) {
    const s = new Option().style;
    s.color = str;
    return s.color !== "";
  }

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={handleFocus}>Фокус</button>
      <button onClick={handleGetValue}>Получить значение</button>

      {/* если значение похоже на цвет — покрасим текст */}
      <p style={{ color: isValidColor(value) ? value : "black" }}>
        {value || "Введите цвет..."}
      </p>
      <p>----------------------------</p>
      <Page />
    </>
  );
}

export default App;

// src/components/Form.jsx
import { useId, useState } from "react";

export default function Form() {
  const formId = useId();
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Отправлено: ${value}`);
  }

  return (
    <>
      {/* кнопка вне формы, связка по form={formId} */}
      <button type="submit" form={formId}>
        Отправить
      </button>

      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor={`${formId}-field`}>Поле</label>
        <input
          id={`${formId}-field`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
}

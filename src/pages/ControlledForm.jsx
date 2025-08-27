import { useState } from "react";

const ControlledForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Имя отправлено: " + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Отправить</button>
      <p>Вы ввели: {value}</p>
    </form>
  );
};

export default ControlledForm;

import { useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Имя было отправлено: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="name" ref={inputRef} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default UncontrolledForm;

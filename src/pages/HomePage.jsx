// import { useState } from "react";
import "./HomePage.css";

const boxStyle = { height: 300, overflow: "auto", border: "1px solid #ccc" };
const innerStyle = { height: 900, padding: 16 };

function HomePage() {
  // const handleClick = () => {
  //   alert("Кнопка нажата");
  // };

  // const handleClick = (message) => {
  //   alert(message);
  // };

  // const handleClick = () => {
  //   alert(message);
  // };

  // const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert("Форма отправлена");
  // };

  // const handleOver = () => console.log("Мышь над кнопкой");
  // const handleOut = () => console.log("Мышь ушла с кнопки");

  // const handleFocus = () => console.log("Поле в фокусе");
  // const handleBlur = () => console.log("Поле потеряло фокус");

  const handleScroll = (event) => {
    console.log("Прокрутка:", event.target.scrollTop);
  };

  return (
    <>
      <div>Домашняя страница</div>
      {/* <button onClick={() => alert("Кнопка нажата")}>Кнопка</button> */}
      {/* <button onClick={handleClick}>Кнопка</button> */}
      {/* <button onClick={() => handleClick("Кнопка нажата")}>Кнопка</button> */}
      {/* <button onClick={() => handleClick()}>Кнопка</button> */}
      {/* <button onClick={() => handleClick(message)}>Кнопка</button> */}
      {/* <input
        value={value}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <p>Вы ввели: {value}</p> */}

      {/* <form onSubmit={handleSubmit}>
        <input name="q" />
        <button type="submit">Отправить</button>
      </form> */}

      {/* <button onMouseOver={handleOver} onMouseOut={handleOut}>
        Наведи на меня
      </button> */}
      {/* <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Фокус тут"
      /> */}
      <div style={boxStyle} onScroll={handleScroll}>
        <div style={innerStyle}>Прокручивайте меня</div>
      </div>
    </>
  );
}

export default HomePage;

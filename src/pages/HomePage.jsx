import Button from "../components/Button";

import "./HomePage.css";

const HomePage = ({ click }) => {
  const showMessage = () => {
    alert("это другое сообщение");
  };

  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button label={"нажми меня"} onClick={() => click()} />
      <Button label="Какое-то сообщение" onClick={() => showMessage()} />
    </div>
  );
};

export default HomePage;

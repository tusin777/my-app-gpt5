import Button from "../components/Button";
import UserList from "../components/UserList";
import programmer from "../assets/images/programmer.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>

      <Button />
      <UserList />

      {/* Картинка из src/assets — импортом */}
      <img src={programmer} alt="Программист" />

      {/* Картинка из public/images — относительным URL от корня */}
      <img src="images/laptop.jpg" alt="Ноутбук" />
    </div>
  );
};

export default HomePage;

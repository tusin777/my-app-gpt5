import Button from "../Button";
import "./Header.css";

const Header = () => {
  const style = {
    color: "blue",
    fontSize: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <header className="container" style={style}>
      <h1>Заголовок</h1>
      <Button
        label={"Регистрация"}
        btnStyles={{ height: 20, background: "red" }}
      />
      <Button
        label={"Авторизация"}
        btnStyles={{ height: 20, background: "green" }}
      />
    </header>
  );
};

export default Header;

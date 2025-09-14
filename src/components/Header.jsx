import UserInfo from "./UserInfo";
import { useUserContext } from "../contexts/UserContext";

const Header = () => {
  const { user, updateUser } = useUserContext();

  return (
    <div>
      <h1>Добро пожаловать, {user.name}!</h1>
      <button
        onClick={() => updateUser({ name: "Вася", email: "vasia@example.com" })}
      >
        Сменить пользователя
      </button>
      <UserInfo />
    </div>
  );
};

export default Header;

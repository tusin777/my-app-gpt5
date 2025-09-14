import UserInfo from "./UserInfo";
import { useUserContext } from "../contexts/UserContext";

const Header = () => {
  const user = useUserContext();

  return (
    <div>
      <h1>Добро пожаловать, {user.name}!</h1>
      <UserInfo />
    </div>
  );
};

export default Header;

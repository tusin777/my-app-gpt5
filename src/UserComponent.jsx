import { useState } from "react";
import UserSearch from "./UserSearch";

const UserComponent = () => {
  const [userId, setUserId] = useState(1);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Пример загрузки данных пользователя</h1>
      <label>
        Введите ID пользователя:
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
      </label>
      <UserSearch userId={userId} />
      <button onClick={() => setCounter((n) => n + 1)}>
        Увеличить счётчик: {counter}
      </button>
    </div>
  );
};

export default UserComponent;

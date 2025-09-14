import { useState, useEffect, useCallback } from "react";

const UserSearch = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!res.ok) throw new Error("Ошибка при загрузке данных");
      const data = await res.json();
      setUserData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <div>
      <h2>Данные пользователя</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div>
          <p>Имя: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Телефон: {userData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;

import { UserContext } from "./contexts/UserContext";

import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [user, setUser] = useState({
    name: "Иван",
    email: "ivan@example.com",
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <Header />
    </UserContext.Provider>
  );
}

export default App;

import React from "react";

const Greeting = ({ isLoggedIn }) => {
  //   if (isLoggedIn) {
  //     return <h1>Добро пожаловать!</h1>;
  //   } else {
  //     return <h1>Пожалуйста, войдите в систему!</h1>;
  //   }
  return (
    <div>
      {isLoggedIn ? (
        <h1>Добро пожаловать!</h1>
      ) : (
        <h1>Пожалуйста, войдите в систему!</h1>
      )}
    </div>
  );
};

export default Greeting;

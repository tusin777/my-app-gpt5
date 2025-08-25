import React from "react";

const User = ({ name, age }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Возраст: {age}</p>
    </div>
  );
};

export default User;

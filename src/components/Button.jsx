const Button = () => {
  const handleClick = () => {
    alert("меня нажали");
  };
  return <button onClick={handleClick}>Кнопка</button>;
};

export default Button;

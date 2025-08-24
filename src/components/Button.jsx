const Button = ({ label, onClick, btnStyles }) => {
  // props.onClick = reaction; // Так делать нельзя
  return (
    <button onClick={onClick} style={btnStyles}>
      {label}
    </button>
  );
};

export default Button;

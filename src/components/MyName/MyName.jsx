import "./MyName.css";

const MyName = () => {
  // Массив значений, который мы отрисуем в виде <li>
  const cats = ["Лев", "Тигр", "Пума"];

  return (
    <ul style={{ color: "blue", fontSize: 32, backgroundColor: "green" }}>
      {cats.map((cat) => (
        // В списках обязателен уникальный key
        <li key={cat}>{cat}</li>
      ))}
    </ul>
  );
};

export default MyName;

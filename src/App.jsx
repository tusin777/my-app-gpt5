import Setting from "./components/Setting";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [name, handleSetName, handleRemoveName] = useLocalStorage(
    "name",
    "Гость"
  );

  return (
    <div>
      <h1>Привет, {name} </h1>
      <input
        type="text"
        value={name}
        placeholder="Введите ваше имя"
        onChange={(e) => handleSetName(e.target.value)}
      />
      <button onClick={handleRemoveName}>Очистить поле ввода</button>
      <Setting />
    </div>
  );
};

export default App;

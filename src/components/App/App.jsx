import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";

import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  // const handleClick = () => {
  //   alert(message);
  // };

  // const handleClick = (message) => {
  //   alert(message);
  // };

  return (
    <main className="app">
      {/* <Header />
      <HomePage message="Переданное сообщение" handleClick={handleClick} /> */}
      <HomePage />

      <Footer />
    </main>
  );
}

export default App;

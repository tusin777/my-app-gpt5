import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {
  const handleClick = () => {
    alert("меня нажали");
  };
  return (
    <main className="app">
      <Header />
      <HomePage click={handleClick} />
      <Footer />
    </main>
  );
}

import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";

import Footer from "../Footer/Footer";

import Counter from "../Counter";

import "./App.css";
import UserProfile from "../UserProfile";
import ParentComponent from "../ParentComponent";

function App() {
  return (
    <main className="app">
      <Header />
      <HomePage />
      <Counter />
      <UserProfile />
      <ParentComponent />
      <Footer />
    </main>
  );
}

export default App;

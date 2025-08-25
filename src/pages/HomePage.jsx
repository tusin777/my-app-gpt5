// import Greeting from "./Greeting";

// import UserProfile from "./UserProfile";

import WelcomeMessage from "./WelcomeMessage";

import "./HomePage.css";
// import TodoList from "./TodoList";
// import Notification from "./Notification";

// const messages = ["Сообщение 1", "Сообщение 2", "jjk"];

// const messages = ["Сообщение 1", "Сообщение 2"];
// const user = {
//   name: "Иван",
//   age: 25,
// };

// const todos = [
//   { id: 1, text: "Изучить React", completed: true },
//   { id: 2, text: "Создать проект", completed: false },
// ];

const isLoggedIn = true;

function HomePage() {
  return (
    <>
      <div>Домашняя страница</div>
      {/* <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} /> */}
      {/* <Notification messages={messages} /> */}
      {/* <Notification messages={[]} /> */}
      {/* <UserProfile user={user} />
      <UserProfile user={null} />
      <TodoList todos={todos} /> */}
      <WelcomeMessage isLoggedIn={isLoggedIn} />
    </>
  );
}

export default HomePage;

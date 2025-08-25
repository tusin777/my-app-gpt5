import UserList from "./UserList";
import Tasks from "./Tasks";
import Comments from "./Comments";
import Products from "./Products";
import { v4 as uuidv4 } from "uuid";
import "./HomePage.css";
const numbers = [1, 2, 3, 4, 5, 6];
// const listItems = numbers.map((number) => <li>{number}</li>); // предупреждение: нет key
// const listItems = numbers.map((number) => (
//   <li key={number.toString()}>{number}</li>
// ));// ключ как строка

// const listItems = numbers.map((number, i) => <li key={i}>{number}</li>); // допустимо для статического, но нежелательно в динамическом списке

const listItems = numbers.map((number) => <li key={uuidv4()}>{number}</li>);
const listItems2 = numbers.map((number) => (
  <li key={uuidv4()}>{number + " " + uuidv4()}</li>
));

function HomePage() {
  return (
    <>
      <UserList />
      <Tasks />
      <Comments />
      <Products />

      <ul>{listItems}</ul>
      <ul>{listItems2}</ul>
    </>
  );
}

export default HomePage;

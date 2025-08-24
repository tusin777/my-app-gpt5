// import { Component } from "react";

// export class ChildComponent extends Component {
//   render() {
//     const { count, onIncrement } = this.props;
//     return (
//       <div>
//         <p>Еще счетчик: {count}</p>
//         <button onClick={onIncrement}>Прибавить 1</button>
//       </div>
//     );
//   }
// }

// export default ChildComponent;

import React from "react";

const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Еще счетчик: {count}</p>
      <button onClick={onIncrement}>Прибавить 1</button>
    </div>
  );
};

export default ChildComponent;

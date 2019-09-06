import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

//functional component
const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};

// class component
// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         <div>{this.state.counter}</div>
//       </div>
//     );
//   }
//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
// }

ReactDOM.render(<App color="red" />, document.querySelector("#root"));

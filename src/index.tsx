import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));

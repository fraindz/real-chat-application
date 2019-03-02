import React from "react";
import ReactDOM from "react-dom";

import ChatRoom from "./ChatRoom";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ChatRoom />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

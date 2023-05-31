import React, { Component } from "react";
import Learn from "../Tests/Learn";
import Lesson from "../Tests/Lesson";

class App extends Component {
  state = { route: "LESSON" };

  render() {
    switch (this.state.route) {
      case "LEARN":
        return <Learn />;
      case "LESSON":
        return <Lesson />;
      default:
        throw new Error(`Invalid route: ${this.state.route}`);
    }
  }
}

export default App;

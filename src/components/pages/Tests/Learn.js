import React, { Component } from "react";
import AppBar from "../Tests/AppBar";
import BottomNav from "../Tests/BottomNav";
import PracticeButton from "../Tests/PracticeButton";

class Learn extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <PracticeButton />
        <BottomNav />
      </div>
    );
  }
}

export default Learn;

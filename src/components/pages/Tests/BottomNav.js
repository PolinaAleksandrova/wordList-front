import React from "react";







const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    boxShadow: "0 -1px 3px 1px rgba(0, 0, 0, .1)"
  }
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

 
}


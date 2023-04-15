import React from "react";
import PropTypes from "prop-types";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: "fixed",
    right: 20,
    bottom: 75
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
     
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};


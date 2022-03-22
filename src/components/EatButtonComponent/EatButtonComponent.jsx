import React from "react";
import "./EatButtonComponent.css";

const EatButtonComponent = (props) => {
  return (
    <div onClick={props.onClick} className="eat-button-component__root">
      <span className="eat-button-component__text">Eat Donut!</span>
    </div>
  );
};

export default EatButtonComponent;

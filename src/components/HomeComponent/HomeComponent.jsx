import React from "react";
import DonutComponent from "../DonutComponent/DonutComponent";
import EatButtonComponent from "../EatButtonComponent/EatButtonComponent";
import "./HomeComponent.css";
const HomeComponent = () => {
  const [eatenCount, setEatenCount] = React.useState(0);

  const onClick = () => {
    setEatenCount(eatenCount + 1);
  };

  return (
    <div className="home-component__root">
      <DonutComponent eatenCount={eatenCount} />
      <EatButtonComponent onClick={onClick} />
    </div>
  );
};

export default HomeComponent;

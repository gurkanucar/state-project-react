import React, { useState } from "react";
import "./DonutComponent.css";

import donutImage from "../../assets/donut.png";

const DonutComponent = (props) => {
  const { eatenCount } = props;

  return (
    <div className="donut-component__root">
      <img className="donut-component__img" src={donutImage} />
      <span className="donut-component__text">{`${eatenCount} donuts were eaten`}</span>
    </div>
  );
};

export default DonutComponent;

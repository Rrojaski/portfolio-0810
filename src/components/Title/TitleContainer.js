import React from "react";
import Border from "./Border";

const TitleConatiner = props => {
  return (
    <React.Fragment>
      {props.children}
      <Border bcolor={props.bcolor} margin={props.margin} />
    </React.Fragment>
  );
};

export default TitleConatiner;

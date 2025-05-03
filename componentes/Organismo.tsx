import React from "react";
import Dos from "./Dos";
import Uno from "./Uno";

const Organismo = () => {
  return (
    <>
      <div className="contenedor">
        <Uno color="#EB5757" />
        <Dos />
      </div>
      <div className="contenedor">
        <Uno color="#9B51E0" />
        <Dos />
      </div>
      <div className="contenedor">
        <Uno color="#BDBDBD" />
        <Dos />
      </div>
    </>
  );
};

export default Organismo;

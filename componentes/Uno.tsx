import React from "react";

const Uno = ({ color }) => {
  return (
    <div className="parte-1" style={{ backgroundColor: color }}>
      <div className="parte-1-1">
        <div className="uno">1</div>
        <p>Agente/Topic</p>
      </div>
      <div className="parte-1-2">
        <p>SAAS-0000</p>
        <img src="/Vector.svg" width={30} height={30} />
      </div>
    </div>
  );
};

export default Uno;

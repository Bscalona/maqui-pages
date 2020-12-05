import React from "react";
import "./style.css";

export interface BaloonsProps {
  children: string;
  visible: boolean;
}

const Baloons: React.SFC<BaloonsProps> = ({ children, visible }) => {
  return (
    <div className="vineta">
      {visible ? (
        <span className="globo i abajo-izquierda" id="globo">
          {children}
        </span>
      ) : null}
    </div>
  );
};

export default Baloons;

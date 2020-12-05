import React from "react";
import "./style.css";

export interface CardTextProps {
  children: any;
  className?: string;
}

const CardText: React.SFC<CardTextProps> = ({ children, className }) => {
  return <div className={className || "content-card-text"}>{children}</div>;
};

export default CardText;

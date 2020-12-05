import React from "react";
import "./style.css";
export interface LargeModalProps {
  className?: string;
  title: string;
  children: any;
}

const LargeModal: React.SFC<LargeModalProps> = ({
  className,
  children,
  title,
}) => {
  return (
    <div className={className || "content-large-modal"}>
      <div className="content-top-title">{title}</div>
      <span className="text-page-principal">{children}</span>
    </div>
  );
};

export default LargeModal;

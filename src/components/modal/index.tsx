import React from "react";
import { BiArchiveOut, BiBomb } from "react-icons/bi";

import "./style.css";

export interface ModalProps {
  isShow: boolean;
  onClose: Function;
  children: any;
  title?: string;
  className?: string;
}

const Modal: React.SFC<ModalProps> = ({
  isShow,
  onClose,
  children,
  title,
  className,
}) => {
  return (
    <>
      {isShow ? (
        <div className="background-modal-helper">
          <div className={className || "content-modal-helper"}>
            <div className="header-bar-modal">
              <span className="title-bar-modal">{title || "Ups!"}</span>
              <span
                className="title-bar-modal"
                onClick={onClose as any}
                style={{ cursor: "pointer" }}
              >
                <BiBomb
                  className="fa fa-times-circle"
                  aria-hidden="true"
                  style={{ fontSize: "18px", display: "flex" }}
                />
              </span>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

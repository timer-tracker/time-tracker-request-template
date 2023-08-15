import "./index.css";
import React from "react";

interface ModalProps {
  children?: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const Modal = ({ children, visible, onClose }: ModalProps) => {
  return (
    <div className={visible ? "modal open" : "modal"}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-container" onClick={onClose}>
        <div
          className="modal-card"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

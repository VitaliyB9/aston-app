import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
  const styleClasses = [classes.modal];
  if (visible) {
    styleClasses.push(classes.modalActive);
  }

  return (
    <div
      className={styleClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

import "./Modal.css";

import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

import Button from "../Button/Button";
import React from "react";

function ModalError({ modal, onClose }) {
  const { text, error, success } = modal;

  return (
    <section className="modalError_background">
      <div className="modalError_container">
        {error && <FaExclamationTriangle fontSize={60} color={"#c1121f"} />}
        {success && <FaCheck fontSize={60} color={"#009900"} />}
        <p>{text}</p>
        <Button text={"Ok"} onClick={onClose} />
      </div>
    </section>
  );
}

export default ModalError;

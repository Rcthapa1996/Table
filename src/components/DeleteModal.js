import { useState } from "react";
import { Modal } from "./Modal";

export function DeleteModal(data) {
  const [showModal, setShowModal] = useState(false);
  const onClickDeleteHandler = () => {
    console.log("Delete is clicked", data);
    setShowModal(true);
  };
  return (
    <>
      <span>"Data"</span>
      <a href="#" onClick={onClickDeleteHandler}>
        Delete
      </a>
      {false && <Modal />}
    </>
  );
}

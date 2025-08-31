import { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const toggleModal = (modalNumber) =>
    setIsModalOpen(isModalOpen === modalNumber ? null : modalNumber);

  return (
    <div className="modal-page">
      <button className="open-button" onClick={() => toggleModal(1)}>
        Открыть модальное окно 1
      </button>

      <button className="open-button" onClick={() => toggleModal(2)}>
        Открыть модальное окно 2
      </button>

      <button className="open-button" onClick={() => toggleModal(3)}>
        Открыть модальное окно 3
      </button>

      {isModalOpen === 1 && (
        <Modal onClose={() => toggleModal(1)}>
          <h2>Заголовок модального окна 1</h2>
          <p>Это текст модального окна 1</p>
        </Modal>
      )}
      {isModalOpen === 2 && (
        <Modal onClose={() => toggleModal(2)}>
          <h2>Заголовок модального окна 2</h2>
          <p>Это текст модального окна 2</p>
        </Modal>
      )}
      {isModalOpen === 3 && (
        <Modal onClose={() => toggleModal(3)}>
          <h2>Заголовок модального окна 3</h2>
          <p>Это текст модального окна 3</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;

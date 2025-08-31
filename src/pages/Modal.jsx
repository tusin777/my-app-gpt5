import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import Modal from "react-modal";
import { RxCrossCircled } from "react-icons/rx";
import "./ApplyButton.scss";

export default function ApplyButton() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="container-modal-button">
      <div className="btn-added">
        <button type="button" onClick={handleModalOpen}>
          Postuler
        </button>
      </div>
      <Modal
        className="modal-apply"
        isOpen={openModal}
        onRequestClose={handleModalClose}
        ariaHideApp={false}
      >
        <div className="modal-form">
          <div className="title-modal-button">
            <h1>Votre candidature</h1>
            <button type="button" onClick={handleModalClose}>
              <RxCrossCircled />
            </button>
          </div>
          <form className="form-container">
            <div className="first-second-input">
              <label>
                Curriculum Vitae :
                <input type="file" />
              </label>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

import React from "react";
import Modal from "react-modal";
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
        className="modal-new-offer"
        isOpen={openModal}
        onRequestClose={handleModalClose}
      >
        <div className="modal-form">
          <div className="title-modal-button">
            <h1>Candidature</h1>
            <button type="button" onClick={handleModalClose}>
              X
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

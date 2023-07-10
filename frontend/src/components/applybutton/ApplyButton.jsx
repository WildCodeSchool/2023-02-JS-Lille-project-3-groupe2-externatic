import React from "react";
import Modal from "react-modal";
import { RxCrossCircled } from "react-icons/rx";
import ProfilCard from "../cardprofil/ProfilCard";
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
            <button
              className="btn-close-modal"
              type="button"
              onClick={handleModalClose}
            >
              <RxCrossCircled />
            </button>
          </div>
          <form className="form-container">
            <div className="card-profil">
              <ProfilCard />
            </div>
            <div className="first-input">
              <label>
                Curriculum Vitae (CV) :
                <input type="file" />
              </label>
            </div>
            <div className="second-input">
              <label>
                Lettre de motivation :
                <input type="file" />
              </label>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

import React from "react";
import Modal from "react-modal";
import "./ModalOffer.scss";

export default function ModalOffer() {
  const [openModal, setOpenModal] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  function onImageChange(e) {
    setImages(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="container-modal-button">
      <div className="btn-added">
        <button type="button" onClick={handleOpen}>
          Ajouter
        </button>
      </div>
      <Modal
        className="modal-new-offer"
        isOpen={openModal}
        onRequestClose={handleClose}
      >
        <div className="modal-form">
          <div className="title-modal-button">
            <h1>Nouvelle Offre</h1>
            <button type="button" onClick={handleClose}>
              X
            </button>
          </div>
          <form className="form-container">
            <div className="first-second-input">
              <label>
                Intitulé du poste :
                <input
                  type="text"
                  placeholder="Développeur Web FullStack ..."
                />
              </label>
              <label>
                Déposer une image :
                <input type="file" onChange={onImageChange} />
                <img src={images} alt="" />
              </label>
            </div>
            <label>
              Lieu :
              <input type="text " placeholder="Bordeaux ..." />
            </label>
            <label>
              Expérience requise :
              <input type="text" placeholder=">= 3 ans d'expérience ..." />
            </label>
            <label>
              Description du poste :
              <textarea
                type="text"
                placeholder="Entreprise érigée en 1978, nous offrons ... "
                cols={70}
                rows={20}
              />
            </label>
          </form>
        </div>
      </Modal>
    </div>
  );
}

import React, { useState } from "react";
import "./ButtonLogout.scss";

export default function BoutonLogout() {
  const [loggedIn, setLoggedIn] = useState(false);
  // pour se connecter
  const handlClickLogin = () => {
    setLoggedIn(true);
  };
  // pour se déconnecter
  const handlClickLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div className="btn-center">
      {loggedIn ? (
        <button
          type="button"
          onClick={handlClickLogout}
          className="btn-loginOut"
        >
          Déconnexion
        </button>
      ) : (
        <button
          type="button"
          onClick={handlClickLogin}
          className="btn-loginOut"
        >
          Connexion
        </button>
      )}
    </div>
  );
}

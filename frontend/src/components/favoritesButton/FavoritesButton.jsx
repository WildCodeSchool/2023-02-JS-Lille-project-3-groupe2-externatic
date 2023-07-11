import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import "./FavoritesButton.scss";

function FavoritesButton() {
  const handleClick = () => {};
  return (
    <div>
      <button type="button" className="favorisButton" onClick={handleClick}>
        Voir mes favoris <FaHeart className="heart" />{" "}
        <FaArrowRight className="arrow" />
      </button>
    </div>
  );
}

export default FavoritesButton;

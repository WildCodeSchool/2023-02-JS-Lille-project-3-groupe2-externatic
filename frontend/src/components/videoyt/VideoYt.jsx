import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "@react-hook/media-query";
import "./VideoYt.scss";

export default function VideoYt() {
  const match = useMediaQuery("only screen and (min-width: 650px)");
  const externaticVideo =
    "https://www.youtube.com/watch?v=BYmNVsS5J58&ab_channel=Externatic-Cabinetderecrutementinformatique";

  if (match)
    return (
      <div className="video-wrapper">
        <h1 className="title">
          À propos <span className="title-bold">de nous</span>
        </h1>
        <ReactPlayer className="video-player" url={externaticVideo} />
      </div>
    );
}

import React from "react";
import Auchan from "../../assets/Auchan.jpg";
import Adeo from "../../assets/Adeo.png";
import Goweb from "../../assets/goweb1.jpg";
import Lyreco from "../../assets/lyreco2.jpeg";
import Ibm from "../../assets/ibm1.jpg";
import Wcs from "../../assets/wcs.png";
import "../../Utils.scss";
import JobOfferCard from "../joboffercard/JobOfferCard";
import "./JobOffer.scss";
import "../showmorebtn/ShowMoreBtn.scss";

const testJobOfferData = [
  {
    image: Auchan,
    nameCompany: "Auchan",
    jobTitle: "Dev Fullstack JS",
    city: "Croix (59)",
    experienceTime: "2 ans",
  },
  {
    image: Adeo,
    nameCompany: "Adéo",
    jobTitle: "Dev Fullstack Java",
    city: "Lezennes (59)",
    experienceTime: "1 an d'entretien",
  },
  {
    image: Goweb,
    nameCompany: "Goweb",
    jobTitle: "Alternant Dev back-end",
    city: "Roubaix (59)",
    experienceTime: "10 ans et être un génie",
  },
  {
    image: Lyreco,
    nameCompany: "Lyreco",
    jobTitle: "Dev Fullstack JS",
    city: "Raisme (59)",
    experienceTime: "2 ans",
  },
  {
    image: Ibm,
    nameCompany: "IBM",
    jobTitle: "stage Dev Fullstack JS",
    city: "Lomme (59)",
    experienceTime: "Formation",
  },
  {
    image: Wcs,
    nameCompany: "WCS",
    jobTitle: "Alternance Dev JS",
    city: "Lomme (59)",
    experienceTime: "Formation",
  },
];
export default function JobOffer() {
  return (
    <div className="AjustJobOfferCardAndBtn">
      <h2>
        Des offres d'emploi <span>à votre image</span>
      </h2>
      <div className="JobOfferContainer">
        {testJobOfferData.map((item) => (
          <JobOfferCard
            key={item.nameCompany}
            image={item.image}
            nameCompany={item.nameCompany}
            jobTitle={item.jobTitle}
            city={item.city}
            experienceTime={item.experienceTime}
          />
        ))}
      </div>
    </div>
  );
}

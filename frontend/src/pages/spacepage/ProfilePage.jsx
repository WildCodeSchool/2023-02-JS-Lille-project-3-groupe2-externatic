import ProfilCard from "../../components/cardprofil/ProfilCard";

import InformationCard from "../../components/informationcard/InformationCard";
import "./ProfilePage.scss";

export default function ProfilePage() {
  return (
    <div className="CandidateSpacePageContainer">
      <ProfilCard />
      <InformationCard />
    </div>
  );
}
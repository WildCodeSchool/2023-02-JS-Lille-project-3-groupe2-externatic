import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function EnterpriseLayout() {
  return (
    <div className="EnterpriseLayoutContainer">
      {/* NavBar Goes Here */}
      <Navbar type="enterprise" />
      <Outlet />
      <Footer type="enterprise" />
    </div>
  );
}
export default EnterpriseLayout;

import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

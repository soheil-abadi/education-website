import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
import "./articles.css";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
const Articles = () => {
  return (
    <>
      <Menu />
      <div className="d-flex justify-content-center py-3" style={{}}>
        <h1 style={{ fontFamily: "lalezar" }}>مقالات</h1>
      </div>

      <div
        className="link d-flex justify-content-center py-3"
        style={{ marginBottom: "70px" }}
      >
        <NavLink
          className={(navData) =>
            navData.isActive ? "bg-dark text-white" : null
          }
          to="javaScript"
        >
          <IoLogoJavascript size={40} />
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "bg-dark text-white" : null
          }
          to="php"
        >
          <FaPhp size={40} />
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "bg-dark text-white" : null
          }
          to="python"
        >
          <FaPython size={40} />
        </NavLink>
      </div>
      <div>
        <Container
          style={{ fontFamily: "yekan", textAlign: "justify " }}
          className="my-5 px-sm-0 px-4"
        >
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Articles;

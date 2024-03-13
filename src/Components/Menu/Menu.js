import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { isLogin } from "../../Utiles";
const Menu = () => {
  const logout = () => {
    document.cookie =
      "username=jvt; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";
  };
  const expand = "md";
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        style={{
          backgroundColor: "#332941",
          position: "sticky",
          top: "0",
          zIndex: "1010",
        }}
        className=""
      >
        <Container>
          <Navbar.Brand
            href="#"
            style={{ fontFamily: "lalezar", fontSize: "25px", color: "white" }}
            className=""
          >
            دانش و فناوری پایدار
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ backgroundColor: "white" }}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                style={{ fontFamily: "lalezar" }}
                id={`offcanvasNavbarLabel-expand-${expand}`}
              >
                دانش و فناوری پایدار
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: "#332941" }}>
              <Nav
                className="justify-content-end flex-grow-1"
                style={{ fontFamily: "yekan" }}
              >
                <NavLink
                  to="/SPA-project/"
                  className="nav-link text-white mx-2"
                >
                  صفحه اصلی
                </NavLink>
                <NavLink
                  to="/SPA-project/About"
                  className={(navItem) =>
                    navItem.isActive
                      ? "nav-link text-warning mx-2"
                      : "nav-link text-white mx-2 "
                  }
                >
                  درباره ما
                </NavLink>
                <NavLink
                  to="/SPA-project/Articles"
                  className={(navItem) =>
                    navItem.isActive
                      ? "nav-link text-warning mx-2"
                      : "nav-link text-white mx-2 "
                  }
                >
                  مقالات
                </NavLink>
                <NavLink
                  to="/SPA-project/Panel"
                  className={(navItem) =>
                    navItem.isActive
                      ? "nav-link text-warning mx-2"
                      : "nav-link text-white mx-2 "
                  }
                >
                  پنل
                </NavLink>
                {isLogin() ? (
                  <NavLink
                    to="/SPA-project/Login"
                    onClick={logout}
                    className={(navItem) =>
                      navItem.isActive
                        ? "nav-link text-warning mx-2"
                        : "nav-link text-white mx-2 "
                    }
                  >
                    خروج
                  </NavLink>
                ) : (
                  <NavLink
                    to="/SPA-project/Login"
                    className={(navItem) =>
                      navItem.isActive
                        ? "nav-link text-warning mx-2"
                        : "nav-link text-white mx-2 "
                    }
                  >
                    ورود
                  </NavLink>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;

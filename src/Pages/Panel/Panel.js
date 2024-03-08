import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import sp from "../../assets/image/sp.jpg";
import "./Panel.css";
import {
  facebook,
  pinterest,
  linkedin,
  twitter,
  instagram,
} from "react-icons-kit/fa/";
import Icon from "react-icons-kit";
const Panel = () => {
  return (
    <>
      <Menu />
      <Container
        fluid
        className="base d-flex justify-content-center align-items-center"
      >
        <Container className="panel col-8 offset-2 d-flex flex-wrap flex-wrap-reverse flex-lg-nowrap  rounded-5">
          <Col
            lg={4} 
            className=" rounded-4 bg-white p-4"
            style={{ direction: "ltr" }}
          >
            <h3>Placeholder</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Libero
              exercitationem.
            </p>
            <div className="sale rounded-3 text-white align-items-center d-flex w-100 justify-content-between px-3 pt-2">
              <h1>8.9</h1>
              <p>
                This week <br />
                sale
              </p>
            </div>
            <div className="earn mt-3 rounded-3 text-white align-items-center d-flex w-100 justify-content-between px-3 pt-2">
              <h2>500$</h2>
              <p>
                This week <br />
                Earn
              </p>
            </div>
            <div className="icons w-100 d-flex justify-content-between mt-4 pt-3">
              <Icon
                className="facebook"
                icon={facebook}
                size={27}
                style={{ color: "#A6A6A6", cursor: "pointer" }}
              />
              <Icon
                className="pinterest"
                icon={pinterest}
                size={27}
                style={{ color: "#A6A6A6", cursor: "pointer" }}
              />
              <Icon
                className="linkedin"
                icon={linkedin}
                size={27}
                style={{ color: "#A6A6A6", cursor: "pointer" }}
              />
              <Icon
                className="twitter"
                icon={twitter}
                size={27}
                style={{ color: "#A6A6A6", cursor: "pointer" }}
              />
              <Icon
                className="instagram"
                icon={instagram}
                size={27}
                style={{ color: "#A6A6A6", cursor: "pointer" }}
              />
            </div>
          </Col>
          <Col
            lg={8} xs={12}
            className=" rounded-4 justify-content-center flex-column align-items-center  d-flex bg-white p-5"
            
          >
            <img src={sp} className="ax img-fluid mb-3" />
            <h2>SP</h2>
            <h5 style={{ fontWeight: "bold",textAlign:"center" }}>Project Manager</h5>
            <p style={{ textAlign: "center", direction: "ltr" }} className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              cum quisquam pariatur repudiandae numquam fugiat nihil.
            </p>
            <div className="rater d-flex flex-md-row flex-column mt-2">
              <div className="text-center px-5">
                <h1>350</h1>
                <h6 style={{ transform: "translateY(-10px)" }}>Articles</h6>
              </div>
              <div
                className="text-center px-5"
                style={{ borderRight: "1px solid gray" }}
              >
                <h1>25k</h1>
                <h6 style={{ transform: "translateY(-10px)" }}>Followers</h6>
              </div>
              <div
                className="text-center px-5"
                style={{ borderRight: "1px solid gray" }}
              >
                <h1>8.9</h1>
                <h6 style={{ transform: "translateY(-10px)" }}>Rating</h6>
              </div>
            </div>
          </Col>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default Panel;

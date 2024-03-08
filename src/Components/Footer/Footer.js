import { Col, Container, Row } from "react-bootstrap";
import imgFooter from "../../assets/image/1.svg";
import { instagram, telegram, youtubePlay } from "react-icons-kit/fa/";
import Icon from "react-icons-kit";
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#332941",
          fontFamily: "yekan",
          color: "white",
          
        }}
        className=" pt-5 "
      >
        <Container className="px-4">
          <Row>
            <Col md={6}>
              <h4>هدف دانش و فناوری پایدار</h4>
              <p
                className="col-md-6 mt-3"
                style={{
                  lineHeight: "35px",
                  fontSize: "13px",
                  textAlign: "justify",
                }}
              >
                آموزشگاه پایدار با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ
                یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.
              </p>
            </Col>
            <Col style={{ textAlign: "end" }}>
              <img src={imgFooter} style={{ width: "70px" }} alt="" />
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundColor: "#1f1928", width: "100%" }} className="mt-5 py-2">
          <Row style={{ width: "84%" }} className=" mx-auto align-items-center ">
            <Col className="text-start">
              <p className="copyright">تمامی حقوق برای آموزشگاه پایدار محفوظ می باشد.</p>
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Icon className="mx-1" icon={instagram} />
              <Icon className="mx-1" icon={telegram} />
              <Icon className="mx-1" icon={youtubePlay} />
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;

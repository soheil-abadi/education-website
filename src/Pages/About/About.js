import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import imgTeam from "../../assets/image/teams.svg";
import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
const About = () => {
  return (
    <>
    <Menu/>
      <Container fluid className="about">
        <Row className="sp col-10 justify-content-evenly " >
          <Col lg={6} className="info p-5">
            <h1 style={{fontFamily:"lalezar"}}>درباره ما</h1>
            <p style={{fontFamily:"yekan",textAlign:"justify"}}>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <Button variant="primary" style={{fontFamily:"lalezar"}}>مشاهده بیشتر</Button>
          </Col>
          <Col lg={4} className="pic d-flex justify-content-center pb-5 pb-md-0">
            <img src={imgTeam} className="img-fluid" alt="" />
          </Col>
          <Col className="pic-item col-6 "></Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default About;

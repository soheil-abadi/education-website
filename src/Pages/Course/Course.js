import { Col, Container, Row } from "react-bootstrap";
import products from "../../data";
import { useParams } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";

const Course = () => {
  const courseHandler = useParams().courseId
  let courseInfo = products.find((elem)=>elem.id==courseHandler)
  return (
    <>
    <Menu/>
      <Container>
        <Row className="my-5">
          <Col md={5}>
            <img src={courseInfo.img} className="img-fluid mb-4" />
          </Col>
          <Col md={7} className="d-flex flex-column gap-2">
            <h3 style={{fontFamily:"lalezar"}}>{courseInfo.title}</h3>
            <h6 style={{fontFamily:"yekan"}}>مدرس : {courseInfo.teacher}</h6>
            <h5 style={{fontFamily:"lalezar"}}>{courseInfo.description}</h5>
            <p style={{fontFamily:"yekan",textAlign:"justify"}}>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Course;

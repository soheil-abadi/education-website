import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CoursesItem from "./PackageItem";
const Courses = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "https://next1code.ir/wp-content/uploads/2022/12/react-cover.jpg",
      title: "دوره آموزشی ری‌اکت",
      description: "آموزش پروژه محور ری‌اکت از مقدماتی تا پیشرفته",
      
    },
    {
      id: 2,
      img: "https://next1code.ir/wp-content/uploads/2022/10/bootstrap.png",
      title: "دوره آموزشی بوت‌استرپ",
      description: "آموزش پروژه محور بوت‌استرپ 5.3 با تمرین های زیاد",
    },
    {
      id: 3,
      img: "https://next1code.ir/wp-content/uploads/2021/08/couse-cover.jpg",
      title: "دوره آموزشی جاوااسکریپت",
      description: "آموزش صفر تا صد جاوااسکریپت به صورت پروژه محور",
    },
    {
      id: 4,
      img: "https://next1code.ir/wp-content/uploads/2023/11/redux-course-cover-1.jpg",
      title: "دوره آموزشی ریداکس",
      description: "آموزش پروژه محور ریداکس از مقدماتی تا پیشرفته",
    },
  ]);
  return (
    <>
    <Container className="mt-4 px-4 mb-5">
      <h4 style={{ fontFamily: "lalezar" }}>دوره‌های آموزشی</h4>
      <Row className="mt-3 align-items-stretch row-gap-4">
        {products.map((elem) => (
          <Col md={6} xl={3}>
            <CoursesItem products={elem} />
          </Col>
        ))}
      </Row>
    </Container>
    
    </>
  );
};

export default Courses;

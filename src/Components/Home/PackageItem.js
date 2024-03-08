
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const CoursesItem = ({ products }) => {
  return (
    <>
      <Card style={{fontFamily:"yekan"}}>
        <Card.Img variant="top" src={products.img} />
        <Card.Body>
          <Card.Title style={{fontWeight:"bold",fontSize:"18px"}}>{products.title}</Card.Title>
          <Card.Text className='py-3' style={{fontSize:"16px"}}>
            {products.description}
          </Card.Text>
          <Button variant='primary' style={{border:"0"}} size="sm">
          <Link to={`/SPA-project/Course/${products.id}`} className='text-white nav-link'>مشاهده دوره</Link>
        </Button>
        </Card.Body>
      </Card>
     
    </>
  );
};

export default CoursesItem;

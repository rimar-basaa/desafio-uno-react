import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function Cards({nombre, info, img, color, txt}) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{info}</Card.Text>
        <Tags color={color} txt={txt} />
      </Card.Body>
    </Card>
  );
};

export default Cards;
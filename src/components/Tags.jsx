import Badge from 'react-bootstrap/Badge';

function Tags({color, txt}) {

  return (
    <h6><Badge bg={color}>{txt}</Badge></h6>    
  );
};

export default Tags;
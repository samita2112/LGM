import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button,Row } from 'react-bootstrap';

const UserList = ({ users }) => {
  return (
    <div className="blog-list" style={{ backgroundColor:'beige',position:'absolute',left:'6rem',top:'8rem',maxWidth:'80%'}}>
  
      <Row style={{ maxWidth:'70%'}} >
      
      {users.map(user => (
       
        <Card className="user-list" style={{ left:'10rem',width: '18rem' ,margin:'5px auto'}}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{user.first_name} {user.last_name}</Card.Title>
          <Card.Text>
           <span style={{fontWeight:'bold'}}>Email:</span>{user.email}
          </Card.Text>
          <Button style={{ borderColor:'#f1356d',backgroundColor:'#f1356d'}} variant="primary">View Details</Button>
        </Card.Body>
      </Card>
     
      ))}
      
     </Row>
    </div>
  );
}
 
export default UserList;
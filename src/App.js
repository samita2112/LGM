import Home from "./Home";
import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
function App() {
  const [user,setUser] = useState(false);
  
  const getdata =() =>{
    setUser(true)
  }
  return (
    <div>
    <nav className="navbar">
      <h1>Exon</h1>
      <div className="links">
        <a href="/">Home</a>       
         <Button onClick={() =>getdata()} style={{ borderColor:'#f1356d',backgroundColor:'#f1356d'}} variant="primary">Get User</Button>
      </div>
    
      <div className="home">
      {user && <Home />}
    </div>

    </nav>
    </div>
  );
}

export default App;

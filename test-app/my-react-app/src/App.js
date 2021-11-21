import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {  


  return (
    
    <div className="App">
      <h1>React</h1>      
      <Router>
      
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop"  element={<Shop />} />        
      </Routes>
     
      </Router>    
     
    </div>
    
   
  );
}

export default App;

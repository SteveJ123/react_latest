// import './About.css';
import {useNavigate} from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  function handleClick(){   
    console.log("test");
       navigate('/shop')
      
    }
  return (
    <div className="App">
      <h1>About</h1>
      <button onClick={handleClick}>
  Activate Lasers
</button> 

<div>
  <form>
    <input type="text" placeholder="Enter email" name="email" />
    <input type="passed" placeholder="password" name="password" />
    <input type="submit" />
  </form>
</div>

    </div>
  );
}

export default About;
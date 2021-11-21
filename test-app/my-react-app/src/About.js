// import './About.css';
import {useNavigate} from 'react-router-dom';
// import useFrom from 'react-hook-form';
import React, {useState} from 'react';



function About() {
  const navigate = useNavigate();

  const [userRegistration, setuserRegistration] = useState({
    email: "",
    password: ""
  })

  function handleClick(e){   
    console.log("test");
    const name = e.target.name;
    const value = e.target.value;
     console.log(name, value)
     setuserRegistration({...userRegistration, [name]: value})      
      
    }

  function handleSubmit(e){
    e.preventDefault();
    const newRecord = {...userRegistration};
    console.log(newRecord);
  }

    // const {register, handleSubmit, error} =useForm();

    const onSubmit = (data) =>{
      console.log(data);
    }
  return (
    <div className="App">
      <h1>About</h1>
      <button onClick={handleClick}>
  Activate Lasers
</button> 

<div>
  <form onSubmit={handleSubmit}>
    <input type="text"
    placeholder="Enter email"
    value={userRegistration.email}
    onChange={handleClick}
     name="email" />
    <input type="passed"
    placeholder="password"
    value={userRegistration.password}
    onChange={handleClick}
    name="password" />
    <input type="submit" />
  </form>
</div>

    </div>
  );
}

export default About;
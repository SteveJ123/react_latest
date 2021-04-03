import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
const[count, setCount] = React.useState(0);
const[user, setUser] = React.useState([]);

useEffect(()=>{
  console.log("on load");
  async function getUsers() {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();  //array
    // let html = '';
    console.log(users);  //users array from api
     setUser(users);
    console.log("user", users);  //added
  console.log()
}

renderUsers();
}, [])

  return (  
     <div>        
  <h2>{JSON.parse(user,(key,value)=>{
    console.log(key,value);
  })
  }</h2>                            

     </div>
  
    
  );
}

export default App;

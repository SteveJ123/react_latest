import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
      user: []
    }


componentDidMount() {
  fetch('https://api.spaceXdata.com/v3/launches?limit=100')
  .then((response) => response.json())
  .then(booksList => {
    console.log("booksList", booksList);
      this.setState({ user: booksList });
  });  
}

render() {
  return (
      <div>        
          {this.state.user.map((element) => (
                    <div className="user">
                    <img src={element.links.mission_patch_small} />
                    <h2>{element.rocket.rocket_name}</h2>                            
                </div>
                ))}
      </div>
  )
}
}

export default App;

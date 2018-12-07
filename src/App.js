import React, { Component } from 'react';

class App extends Component {
  getNotifications = async () => {
		const response = await window.fetch('http://localhost:3004/getNotifications');
    const data = await response.json();
    
    console.log(data);
  }
  
  componentDidMount() {
		this.getNotifications();
	}


  render() {
    return (
      <div className="App">
        ben
      </div>
    );
  }
}

export default App;

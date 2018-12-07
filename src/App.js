import React, { Component } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction:column;
  padding: 10%;
`

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
      <StyledApp>
        ben
      </StyledApp>
    );
  }
}

export default App;

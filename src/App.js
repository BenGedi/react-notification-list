import React, { Component } from 'react';
import styled from 'styled-components';
import NotificationList from './components/notification-list/notification-list';

const StyledApp = styled.div`
  display: flex;
  flex-direction:column;
  padding: 10%;
`

class App extends Component {
  state = {
    notifications: [],
  }

  initialData = [];
  getNotifications = async () => {
    const response = await window.fetch('http://localhost:3004/getNotifications');
    const data = await response.json();

    this.initialData = data;
    this.setState({ notifications: data.notifications });
  }
  
  componentDidMount() {
		this.getNotifications();
	}


  render() {
    return (
      <StyledApp>
        <NotificationList {...this.state} />
      </StyledApp>
    );
  }
}

export default App;

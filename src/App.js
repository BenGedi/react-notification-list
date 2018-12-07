import React, { Component } from 'react';
import styled from 'styled-components';
import NotificationList from './components/notification-list/notification-list';
import Controllers from './components/controllers/controllers';

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

  getFilteredNotifications = (notifications, isActive, searchTerm) => (
		notifications.filter(item => {
			const info = item.information.toLowerCase();

			return isActive ? item.active && info.includes(searchTerm) : info.includes(searchTerm);
		})
	)

	getRelevantNotifications = isActive => (
		isActive ? this.state.notifications : this.initialData.notifications
	);

	filterSearchByInformation = (searchTerm) => {
		const term = searchTerm.toLowerCase();
		const isActive = this.state.isActive;
		const notificationState = this.getRelevantNotifications(isActive);
		const notifications = this.getFilteredNotifications(notificationState, isActive, term);

		this.setState({ notifications, searchTerm });
	}

	toggleActiveNotifications = (e) => {
		const isActive = e.target.checked;
		const searchTerm = this.state.searchTerm;
		const notificationState = this.getRelevantNotifications(isActive);
		const notifications = this.getFilteredNotifications(notificationState, isActive, searchTerm);

		this.setState({ notifications, isActive })
	}
  
  componentDidMount() {
		this.getNotifications();
	}


  render() {
    return (
      <StyledApp>
        <header>
					<h1>Notifications</h1>
				</header>

        <Controllers
					filter={this.filterSearchByInformation}
					toggleActive={(e) => this.toggleActiveNotifications(e)} />

        <NotificationList {...this.state} />
      </StyledApp>
    );
  }
}

export default App;

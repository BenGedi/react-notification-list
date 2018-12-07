import React from 'react'
import styled from 'styled-components'
import NotificationItem from './notification-item/notification-item'

const StyledNotificationList = styled.div`
    .notification-item {
        margin-bottom: 10px;
    }
`

const notificationList = ({notifications}) => (
    <StyledNotificationList>
        { notifications.map((item, i) => (
                    <NotificationItem key={i} {...item}/>
                )
            )
        }
    </StyledNotificationList>
)

export default notificationList;
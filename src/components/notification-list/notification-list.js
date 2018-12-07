import React from 'react'
import styled from 'styled-components'

const StyledNotificationList = styled.div`
    .notification-item {
        margin-bottom: 10px;
    }
`

const notificationList = ({notifications}) => (
    <StyledNotificationList>
        { notifications.map((item, i) => (
                    <div key={i}>{item.information}</div>
                )
            )
        }
    </StyledNotificationList>
)

export default notificationList;
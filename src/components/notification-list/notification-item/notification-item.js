import React from 'react'
import styled from 'styled-components'

const StyledNotification = styled.div`
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    display: flex;
    position: relative;
    margin-bottom: 10px;
    box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.35);
    transition: all .2s ease-in-out;

    .notification {
        width:100%;
        padding: 5px 10px;

        header {
            color: lightgrey;
            margin-bottom: 5px;
        }
    }
    &:before {
        content: '';
        width: 3px;
        position:absolute;
        left: 0;
        background-color: ${props => props.color};
        height:100%;
        display: inline-block;
    }

    &:hover {
        transform: scale(1.01);
        box-shadow: 2px 6px 5px 0px rgba(0,0,0,0.35);
    }
`

const notification = props => 
    <StyledNotification color={props.color} >
        <div className="notification">
            <header>{props.date}</header>
            <div>{props.information}</div>
        </div>
    </StyledNotification>

export default notification;
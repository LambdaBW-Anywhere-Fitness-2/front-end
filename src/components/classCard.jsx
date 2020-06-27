import React from 'react';
import styled from 'styled-components'

const Div = styled.div `
    border: 1px solid black;
    margin: 10px;
    border-radius: 10px;
`

const ClassCard = (props) => {
    return (
    <Div>
        <h1>{props.name}</h1>
        <h4>Taught by: {props.teacher}</h4>
        <p>Location: {props.location}</p>
        <p>Date: {props.date}</p>
        <p>Duration: {props.duration}</p>
        <p>Time: {props.time}</p>
    </Div>
    )
}

export default ClassCard
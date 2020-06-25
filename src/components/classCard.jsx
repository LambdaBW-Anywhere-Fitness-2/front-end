import React from 'react'

const ClassCard = (props) => {
    return (
    <div>
        <h1>{props.name}</h1>
        <h4>Taught by: {props.teacher}</h4>
        <p>Location: {props.location}</p>
        <p>Date: {props.date}</p>
        <p>Duration: {props.duration}</p>
        <p>Location: {props.location}</p>
        <p>Time: {props.time}</p>
    </div>
    )
}

export default ClassCard
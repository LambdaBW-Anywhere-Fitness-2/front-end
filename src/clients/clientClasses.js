import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Axios from 'axios';
import ClassCard from '../components/classCard';

const Form = styled.form `
        display: flex;
    `
    const Button = styled.button `
        width: 100px;
        margin: 0 auto;
    `
    const Div = styled.div `
        display: flex;
        justify-content: space-between;
    `
    const ClassDiv = styled.div `
        width: 30%;
        margin: 0 auto;
    `

const ClientClasses = () => {
    const [classInfo, setClassInfo] = useState({
        time: '',
        date: '',
        location: '',
        duration: '',
        size: '',
        intensity: ''
    })

    const handleChange = (e) => {
        setClassInfo({ ...classInfo, [e.target.name]: e.target.value })
    }

    const [info, setInfo] = useState([]);

    useEffect(() => {
        Axios.get('https://anywherefitnessapp.herokuapp.com/api/clients/class')
        .then(res => {
            console.log('Response Data', res.data)
            setInfo(res.data)
        })
        .catch(err => {
            console.log('Error:', err)
        })
    }, [])

    return (
        <div>

            <h2>
                This is where the classes will show!
        </h2>

            <Form onSubmit={e => {
                e.preventDefault()
                console.log('New Class Info', classInfo)
            }}>
                <Div>
                    <label htmlFor='time'>
                        Class Time
                        <select type='time' id='time' name='time' onChange={handleChange}>
                            <option>---Select Option---</option>
                            <option value='earlyMorning'>Early Morning</option>
                            <option value='lateMorning'>Late Morning</option>
                            <option value='midDay'>Mid-day</option> 
                            <option value='earlyAfternoon'>Early Afternoon</option>
                            <option value='lateAfternoon'>Late Afternoon</option>
                        </select>
                    </label>
                    <label htmlFor='date'>
                        Class Date
                        <input type='date' id='date' name='date' value={classInfo.date} onChange={handleChange}/>
                    </label>
                    <label htmlFor='location'>
                        Class location
                        <input type='text' id='location' name='location' value={classInfo.location} onChange={handleChange} placeholder='Insert Location...'/>
                    </label>
                </Div>
                <Div>
                    <label htmlFor='duration'>
                        Class Duration
                        <select id='duration' name='duration' value={classInfo.duration} onChange={handleChange} >
                            <option>---Select Option---</option>
                            <option value='0-15Min'>0-15 Minutes</option>
                            <option value='15-30Min'>15-30 Minutes</option>
                            <option value='30-45Min'>30-45 Minutes</option>
                            <option value='45-60Min'>45-60 Minutes</option>
                        </select>
                    </label>
                    <label htmlFor='size'>
                        Class size
                        <select id='size' name= 'size' value={classInfo.size} onChange={handleChange} >
                            <option>---Select Option---</option>
                            <option value='small'>Small</option>
                            <option value='average'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                    <label htmlFor='intensity'>
                        Class intensity
                        <select id='intensity' name='intensity' value={classInfo.intensity} onChange={handleChange}>
                            <option>---Select Option---</option>
                            <option value='beginner'>Beginner</option>
                            <option value='intermediate'>Intermediate</option>
                            <option value='advanced'>Advanced</option>
                        </select>
                    </label>
                    <Button type='submit'>Search</Button>
                    <Button type='reset' onClick={() => {
                        setClassInfo({
                            time: '', 
                            date: '', 
                            location: '', 
                            duration: '', 
                            size: '', 
                            intensity: ''
                        })
                    }}>Reset</Button>
                </Div>
            </Form>
                <ClassDiv>
                    {info.map(e => {
                        return <ClassCard name={e.class_name} teacher={e.instructor_name} location={e.location} date={e.start_date} duration={e.duration} time={e.start_time}/>
                    })}
                </ClassDiv>
            <Link exact to="/"><button>Home</button></Link>
        </div>

    )
}

export default ClientClasses;
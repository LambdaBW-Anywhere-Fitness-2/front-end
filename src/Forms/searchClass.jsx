import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Axios from 'axios';

const SearchClass = () => {
    const [classInfo, setClassInfo] = useState({
        name:'', 
        small: false, 
        average: false,
        large: false,
        easy: false,
        medium: false, 
        hard: false
    })

    useEffect(() => {
        Axios.get('https://anywherefitnessapp.herokuapp.com/api/clients/class')
        .then(res => {
            console.log('Response Data', res.data)
        })
        .catch(err => {
            console.log('Error:', err)
        })
    }, [])

    const Form = styled.form `
        display: flex;
        flex-direction: column;
    `
    return(
        <div>
            <Form>
                <label htmlFor='time'>
                    Class Time
                    <select type='time' id='time' class='time' >
                        <option value='earlyMorning'>Early Morning</option>
                        <option value='lateMorning'>Late Morning</option>
                        <option value='midDay'>Mid-day</option>
                        <option value='earlyAfternoon'>Early Afternoon</option>
                        <option value='lateAfternoon'>Late Afternoon</option>
                    </select>
                </label>
                <label htmlFor='date'>
                    Class Date
                    <input type='date' id='date' name='date' />
                </label>
                <label htmlFor='location'>
                    Class location
                    <input type='text' id='location' name='location' />
                </label>
                <label htmlFor='duration'>
                    <select id='duration' name='duration' value={classInfo.duration} />
                </label>
                <label htmlFor='size'>
                    Class size
                    <select id='size' name= 'size' >
                        <option value='small'>Small</option>
                        <option value='average'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <label htmlFor='intensity'>
                    Class intensity
                    <select id='intensity' name='intensity' value=''>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </label>
            </Form>
        </div>
    )
}

export default SearchClass
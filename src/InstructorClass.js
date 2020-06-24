import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InstructorClass = () => {

  return (
    <>
   <h1>Create Class!</h1>

      <Form>
        <label htmlFor='name'>
          Class Name
          <input type="name" name="name" value="name" />
        </label>

        <label htmlFor="discription">
          Class Discription
          <textarea type="description" id="discription" value="discription" />
        </label>

        <label htmlFor="cost">
          Class Cost (in US dollars)
          <input type="cost" id="cost" value="0" />
        </label>

        <label htmlFor="equipment">
          Class Equipment Requirments
          <textarea type="equipment" id="equipment" value="equipment" />
        </label>

        <label htmlFor="address">
          Class address
          <input type="address" id="address" value="type address here" />
        </label>

        <label htmlFor="type">
          Class type
          <select id="type" name="type">
            <option value="yoga">Yoga</option>
            <option value="boxing">Boxing</option>
            <option value="karate">Karate</option>
            <option value="lifting">Weight Lifting</option>
            <option value="cardio">Cardio</option>
          </select>
        </label>

        <label htmlFor="size">
          Class Size 
          <input type="size" id="size" value="0" />
        </label>

        <label htmlFor="length">
          Class Length (in minutes)
          <input type="length" id="length" value="0" />
        </label>

        <label htmlFor="level">
          Class Level
          <select id="level" name="level" value="">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>

        <label htmlFor="arrival">
          When To Arrive
          <textarea type="arrival" id="arrival" value="" />
        </label>

        <label htmlFor="info">
          What You Need To Know
          <textarea type="info" id="info" />
        </label>

        <label htmlFor="time">
          Class Time
          <select type="time" id="time" class="time">
            <option value="morning">Morning</option>
            <option value="lateMorning">Late Morning</option>
            <option value="midDay">Mid-Day</option>
            <option value="afternoon">Afternoon</option>
            <option value="lateAfternoon">Late Afternoon</option>
          </select>
        </label>

        <label>Class Days</label>
        <div>
          <button>Sunday</button>
          <button>Monday</button>
          <button>Tuesday</button>
          <button>Wednesday</button>
          <button>Thursday</button>
          <button>Friday</button>
          <button>Saturday</button>
        </div>

        <button>Create Class</button>

      </Form>
    </>
  );
}

export default InstructorClass;
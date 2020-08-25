import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";

const SearchClass = () => {
  const [classInfo, setClassInfo] = useState({
    time: "",
    date: "",
    duration: "",
    type: "",
    intensity: "",
    location: ""
  });

  const handleChange = (e) => {
    setClassInfo({ ...classInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    Axios.get("https://anywherefitnessapp.herokuapp.com/api/clients/class")
      .then((res) => {
        console.log("Response Data", res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  return (
    <div>
      <Form>
        <label htmlFor="time">
          Class Time
          <select type="time" id="time" name="time" onChange={handleChange}>
            <option>---Select Option---</option>
            <option value="earlyMorning">Early Morning</option>
            <option value="lateMorning">Late Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
            <option value="night">Night</option>
          </select>
        </label>
        <label htmlFor="date">
          Class Date
          <input type="date" id="date" name="date" />
        </label>
        <label htmlFor="duration">
          Class Duration
          <select id="duration" name="duration" value={classInfo.duration}>
            <option value="0-15Min">0-15 Minutes</option>
            <option value="15-30Min">15-30 Minutes</option>
            <option value="30-45Min">30-45 Minutes</option>
            <option value="45-60Min">45-60 Minutes</option>
          </select>
        </label>
        <label htmlFor="size">
          Class type
          <select id="size" name="size">
            <option value="endurance">Endurance</option>
            <option value="strength">Strength</option>
            <option value="static">Static</option>
          </select>
        </label>
        <label htmlFor="intensity">
          Class intensity
          <select id="intensity" name="intensity" value="">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <label htmlFor="location">
          Class location
          <input type="text" id="location" name="location" />
        </label>
      </Form>
    </div>
  );
};

export default SearchClass;

import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Input } from 'reactstrap';
const InstructorClass = () => {

  return (
    <>
    <h1>Hello</h1>
    <form>
      <label>
        Class Name
        <input type="text" name="name" value="name" />
      </label>
    </form>
    </>
  );
}

export default InstructorClass;
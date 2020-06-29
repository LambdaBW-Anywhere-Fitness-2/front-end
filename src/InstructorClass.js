import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Dropdown, DropdownToggle, Input, DropdownMenu, DropdownItem, ButtonDropdown, Button } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';


const Wrapper = styled.div`
  background-image: url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80")
`

const Legend = styled.legend`
  text-align: left;
  font-size: 15px;
`

const ReactForm = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((pervState) => !pervState);

  const [classForm, setClassForm] = useState({
    name: "",
    discription: "",
    cost: 0,
    equipment: "",
    address: "",
    type: "",
    size: 0,
    length: 0,
    level: "Level",
    arrival: "",
    info: "",
    time: ""
  })

  const schema = yup.object().shape({
    name: yup.string().required().min(2),
    description: yup.string().required(),
    cost: yup.number().integer(),
    equipment: yup.string(),
    address: yup.string(),
    type: yup.string().required(),
    size: yup.number().integer(),
    length: yup.number().integer(),
    level: yup.string(),
    arrival: yup.string(),
    info: yup.string(),
    time: yup.string()
  })

  const submit = () => {
    schema.validate(classForm).then(() => {
      axios.post('https://anywherefitnessapp.herokuapp.com/api/instructor/createclass', classForm).then((res) => {
        console.log(res.data, 'This is your posted data')
      })
    })
  }

  const handleChange = (e) => {
    setClassForm({...classForm, [e.target.name]: e.target.value})
  }

  
  return(
    <>

    <Wrapper>
      <Form onSubmit={(e) => {
        e.preventDefault()
        submit()
        
      }} style={{ margin: '0% auto', width: '50%', backgroundColor: 'white', padding: '1%', borderRadius: '5px'}}>
        
        <FormGroup >
          <Legend>Class Name</Legend>
          <Input style={{ width: '50%' }} type="name" name="name" placeholder="Name" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>Class Description</Legend>
          <Input style={{ width: '50%' }} type="textarea" name="description" placeholder="Add Discription" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>Class Cost (in US dollars)</Legend>
          <Input style={{ width: '10%' }} type="cost" name="cost" value={classForm.cost} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
          <Legend>Class Equipment Requirements</Legend>
          <Input style={{ width: '50%' }} type="textarea" name="requirements" placeholder="Add Requirments" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>Class Address</Legend>
          <Input style={{ width: '50%' }} type="address" name="address" placeholder="Address" onChange={handleChange} />
        </FormGroup>

        <FormGroup> 
        <Legend>Class Type</Legend>         
            <Input style={{width: '50%'}} type="type" name="type" placeholder="Class Type" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>Class Size</Legend>
          <Input style={{ width: '10%' }} type="size" name="size" value={classForm.size} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>Class Length (in minutes)</Legend>
          <Input style={{ width: '20%' }} type="length" name="length" value={classForm.length} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>Class Level</Legend>
          <Dropdown style={{ width: '20%' }} isOpen={dropdownOpen} toggle={toggle} name="level" onChange={handleChange} value={classForm.level}>

            <DropdownToggle caret>Level</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="Beginner">Beginner</DropdownItem>
              <DropdownItem value="Intermediate">Intermediate</DropdownItem>
              <DropdownItem value="Advanced">Advanced</DropdownItem>
            </DropdownMenu>

          </Dropdown>
        </FormGroup>

        <FormGroup>
          <Legend>When To Arrive</Legend>
          <Input style={{ width: '35%'}} type="textarea" name="arrival" placeholder="Arrival" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>What You Need To Know</Legend>
          <Input style={{ width: '35%' }} type="textarea" name="info" placeholder="What You Need" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Legend>Class Time</Legend>
          <Dropdown style={{ width: '20%' }}>
            <DropdownToggle caret>Class Time</DropdownToggle>

          </Dropdown>
        </FormGroup>
        
        <FormGroup>
          <Legend>Class Day's</Legend>
          <Dropdown style={{ width: '20%' }} toggle={toggle}>
            <DropdownToggle caret>Select Day</DropdownToggle>
            <DropdownMenu name="level" onChange={handleChange} value={classForm.level}>
            <DropdownItem>Sunday</DropdownItem>
            <DropdownItem>Monday</DropdownItem>
            <DropdownItem>Tuesday</DropdownItem>
            <DropdownItem>Wednesday</DropdownItem>
            <DropdownItem>Thursday</DropdownItem>
            <DropdownItem>Friday</DropdownItem>
            <DropdownItem>Saturday</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>

        <Button type="submit">Create Class</Button>

       </Form>

    </Wrapper>       
    </>
  );
};

export default ReactForm;
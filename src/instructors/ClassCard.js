import React, { useState, useEffect } from "react";
import axioswithAuth from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import UpdateInstructorClasses from "../instructors/updateInstructorClass";
import { Card, Button } from "react-bootstrap";

const ClassCard = props => {
    //console.log(props.data)
    const [editClass, setEditClass] = useState(props.data);
    console.log(editClass)
    const { push } = useHistory();
    const [toggleType, setToggleType] = useState(false);

    const changeHandler = e => {
        setEditClass({
            ...editClass,
            [e.target.name]: e.target.value
        });
    };
    console.log("ClassData", props.classData)
    console.log("Edit Class", editClass)
    const handleUpdate = e => {
        //   e.preventDefault();

        axioswithAuth()
            .put(`/instructor/updateclass/${editClass.id}`, editClass)
            .then(res => {
                console.log("data from .put: ", res.data)
                props.setClassData([...props.classData.filter(data => data.id !== editClass.id), editClass].sort((a, b) => (a.id > b.id) ? 1 : -1));

                // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
                // setEditClass({
                //     class_name: "",
                //     type: "",
                //     location: "",

                //     duration: "",
                //     intensity_level: "",
                //     start_time: "",
                //     start_date: "",
                // })
                // const updatedClass = props.classList.map(classes => {
                //     if (classes.id === editClass.id) {
                //         return editClass
                //     }
                //     return classes
                // })

                // props.setClasses(updatedClass)
                // push(`/class${editClass.id}`)

            })
            .catch(err => console.error("you failed to update:", err.message));


    }
    // editClass card with some form handleUpdate

    // delete card with current id from props.data.id  handleDelete
    //use OnClick

    const deleteClass = (e, id) => {
        e.preventDefault();
        console.log(e.target, id)
        axioswithAuth()
            .delete(`/instructor/deleteclass/${id}`)
            .then(res => {
                console.log("data in delte comp:", res)
                // props(props.filter((classes) => {
                //     return classes.id !== res.data
                // }))
                props.setClassData([...props.classData.filter(data => data.id !== editClass.id)])
                console.log(res)
            })
            .catch(err => {
                console.error(err.message)
            })
    }
    const handleClassType = (e) => {

        if (toggleType) {
            setToggleType(false);
        } else {
            setToggleType(true);
        }

    }

    function greeting() {
        console.log('hello!');
    }

    function waveHello() {
        console.log('👋');
    }

    return (
        <div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" />
                    <Card.Body>
                        <Card.Title>{props.data.class_name}</Card.Title>
                        <Card.Text>


                            <li> Type: {!toggleType ? <span onClick={() => handleClassType()}>{props.data.type}</span> : <input id={props.id}
                                type="text"
                                name="class_name"
                                placeholder="Class Name"
                                value={editClass.class_name}
                                onChange={changeHandler} />} </li>
                            <li> Start Time: Type: {!toggleType ? <span onClick={() => handleClassType()}>{props.data.start_time}</span> : <input id={props.id}
                                type="text"
                                name="start_time"
                                placeholder="Class Name"
                                value={editClass.start_time}
                                onChange={changeHandler} />}</li>
                            <li> Date: {props.data.start_date}</li>
                            <li> Duration: {props.data.duration}</li>
                            <li> Intensity Level: {props.data.intensity_level}</li>
                            <li> Location: {props.data.location}</li>


                        </Card.Text>
                        <Button onClick={() => {
                            handleUpdate();
                            handleClassType();
                        }}> Update Class</Button>
                        <br />
                        <br />

                        <Button onClick={(e) => deleteClass(e, props.id)
                        }>Delete Class</Button>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* <h4>{props.data.class_name}</h4>
                <h5>{props.data.type}</h5> */}
            </div>


            <form>

                <Card>
                    <Card.Title>
                        <input
                            id={props.id}
                            type="text"
                            name="class_name"
                            placeholder="Class Name"
                            value={editClass.class_name}
                            onChange={changeHandler}
                        />
                    </Card.Title>
                </Card>

                <label>
                    <input
                        id={props.id}
                        type="text"
                        name="type"
                        placeholder="Type of class"
                        value={editClass.type}
                        onChange={changeHandler}
                    />
                </label>
                <br></br>
                <button onClick={handleUpdate}> Update Class</button>
                <button onClick={(e) => deleteClass(e, props.id)
                }>Delete Class</button>
            </form>

        </div >
    )
}

export default ClassCard;



// [{
//     class_name: "",
//     type: "",
//     location: "",
//     type: "",
//     duration: "",
//     intensity_level: "",
//     start_time: "",
//     start_date: "",
// }]
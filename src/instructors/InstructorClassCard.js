import React, { useState, useEffect } from "react";
import axioswithAuth from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ClassCard = props => {
    //console.log(props.data)
    const [editClass, setEditClass] = useState(props.data);
    console.log(editClass)
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



    return (
        <div>
            <div>
                <div className="cardclass">
                    <Card className="center" style={{ width: '18rem' }}>
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
                                <li> Start Time: {!toggleType ? <span onClick={() => handleClassType()}>{props.data.start_time}</span> : <input id={props.id}
                                    type="text"
                                    name="start_time"
                                    placeholder="Start Time"
                                    value={editClass.start_time}
                                    onChange={changeHandler} />}</li>
                                <li> Date: {!toggleType ? <span onClick={() => handleClassType()}>{props.data.start_date}</span> : <input id={props.id}
                                    type="text"
                                    name="start_date"
                                    placeholder="Start Date"
                                    value={editClass.start_date}
                                    onChange={changeHandler} />}</li>
                                <li> Duration: {!toggleType ? <span onClick={() => handleClassType()}>{props.data.duration}</span> : <input id={props.id}
                                    type="text"
                                    name="duration"
                                    placeholder="Duration"
                                    value={editClass.duration}
                                    onChange={changeHandler} />}</li>
                                <li> Intensity Level: {!toggleType ? <span onClick={() => handleClassType()}>{props.data.intensity_level}</span> : <input id={props.id}
                                    type="text"
                                    name="intensity_level"
                                    placeholder="Intensity Level"
                                    value={editClass.intensity_level}
                                    onChange={changeHandler} />}</li>
                                <li> Location: {!toggleType ? <span onClick={() => handleClassType()}>{props.data.location}</span> : <input id={props.id}
                                    type="text"
                                    name="location"
                                    placeholder="location"
                                    value={editClass.location}
                                    onChange={changeHandler} />}</li>


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
                </div>

            </div>

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

{/* <form>

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
</form> */}
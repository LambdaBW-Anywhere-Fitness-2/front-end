import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import axioswithAuth from "../utils/axiosWithAuth";
import ClassCard from './ClassCard';

const UpdateInstructorClasses = props => {
    // console.log(props);

    const { id } = useParams();
    const [classData, setClassData] = useState([]);
    const [update, setUpdate] = useState([{
        class_name: "",
        type: "",
        location: "",

        duration: "",
        intensity_level: "",
        start_time: "",
        start_date: "",
    }])

    console.log(update)
    console.log("classData", classData)

    useEffect(() => {
        axioswithAuth()
            .get("/clients/class")
            .then(res => {

                console.log("data from update class", res.data)
                setClassData(res.data.map(item => {
                    return ({
                        id: item.id,
                        class_name: item.class_name,
                        type: item.type,
                        location: item.location,
                        duration: item.duration,
                        intensity_level: item.intensity_level,
                        start_time: item.start_time,
                        start_date: item.start_date
                    })
                }));
            })
            .catch(err => console.error(err.message))
    }, [id]);









    return (
        <div>
            <h4>Update Classes Here</h4>

            {classData.map((classes, index) => <ClassCard setUpdate={setUpdate} classData={classData} setClassData={setClassData}
                key={index} id={classes.id} data={classes} />)}
        </div>
    )
}


export default UpdateInstructorClasses;


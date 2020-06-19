import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "https://anywherefitnessapp.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth; 
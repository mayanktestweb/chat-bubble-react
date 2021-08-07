import axios from "axios"
import consts from "../config/consts"

let url = consts.ROOT_URL + "/users"

const fetchUserById = ({ id }) => {
    return new Promise((resolve, reject) => {
        let token = localStorage.getItem('token')
        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `basic ${token}`
            },

            url: `${url}/${id}`,
            method: 'GET'
        }).then(res => resolve(res.data))
            .catch(error => reject(error))
    })
}

export { fetchUserById }
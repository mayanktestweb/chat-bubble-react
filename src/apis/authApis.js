import axios from 'axios'
import jwtDecode from 'jwt-decode'
import consts from '../config/consts'
let url = consts.ROOT_URL + "/auth"

let registerUser = ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            url: url + "/register",
            method: 'POST',
            data: { name, email, password }
        }).then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}


let loginUser = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            url: url + "/login",
            method: 'POST',
            data: { email, password }
        }).then(res => resolve(res.data))
            .catch(error => reject(error))
    })
}


let getUserById = ({ _id }) => {
    return new Promise((resolve, reject) => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            url: url + "/verify_token",
            method: 'POST',
            data: { _id }
        }).then(res => resolve(res.data))
            .catch(error => reject(error))
    })
}

export { registerUser, loginUser, getUserById }
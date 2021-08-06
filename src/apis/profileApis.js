import axios from 'axios'
import consts from '../config/consts'

let url = consts.ROOT_URL + "/users"

let updateProfile = ({ image, bio, imageName, userId }) => {
    let token = localStorage.getItem('token')

    return new Promise((resolve, reject) => {
        let fd = new FormData()
        fd.set('bio', bio)
        fd.set('image', image, imageName)


        axios({
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `basic ${token}`
            },

            url: `${url}/${userId}`,
            method: 'PATCH',
            data: fd
        }).then(res => resolve(res.data))
            .catch(error => reject(error))
    })
}

export { updateProfile }
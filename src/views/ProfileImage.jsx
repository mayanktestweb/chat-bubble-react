import React, { useEffect, useRef, useState, useContext } from 'react'
import colors from '../config/colors'
import AppTextArea from '../components/AppTextArea'
import Button from '../components/Button'
import useAuth from '../hooks/useAuth'
import { updateProfile } from '../apis/profileApis'
import UserContext from '../providers/UserProvider'
import consts from '../config/consts'

const ProfileImage = () => {

    const [image, setImage] = useState("")
    const [bio, setbio] = useState("")

    const imageRef = useRef()
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        if (user && user.image !== "") setImage(consts.BASE_URL + "/" + user.image)
    }, [user])



    let onSelection = () => {
        let file = imageRef.current.files[0]

        let fileReader = new FileReader()
        fileReader.addEventListener('loadend', (ev) => {
            setImage(fileReader.result)
        })

        fileReader.readAsDataURL(file)
    }

    let save = async () => {
        if (imageRef.current.files.length === 0 || bio.trim().length === 0) {
            return alert("please complete all fields")
        }

        try {
            let imageUrl = await updateProfile({
                image: imageRef.current.files[0],
                bio,
                imageName: user._id.toString() + ".jpg",
                userId: user._id.toString()
            })
            setUser({ ...user, image: imageUrl })
        } catch (error) {
            console.log(error)
            alert('something went wrong')
        }
    }

    return (
        <div>
            <div
                style={{
                    width: 150,
                    height: 150,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: colors.lightText,
                    borderRadius: 200,
                    marginTop: 10
                }}
            >
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 200
                    }}
                    src={image}
                />
            </div>

            <label
                style={{
                    display: 'block',
                    maxWidth: 50,
                    padding: '10px 20px',
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundColor: colors.secondary,
                    borderRadius: 100,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 10
                }}
                className="hover_effect"
            >
                Upload
                <input type="file"
                    style={{
                        display: 'none'
                    }}
                    ref={imageRef}
                    onChange={onSelection}
                />
            </label>

            <div
                style={{
                    padding: 10
                }}
            >
                <AppTextArea
                    placeholder="Type something about yourself..."
                    value={bio}
                    onChange={(e) => setbio(e.target.value)}
                />
            </div>

            <div
                style={{
                    padding: 10
                }}
            >
                <Button onClick={save} >Save</Button>
            </div>

        </div>
    )
}

export default ProfileImage

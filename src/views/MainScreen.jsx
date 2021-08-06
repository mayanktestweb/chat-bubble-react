import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import HomeScreen from './HomeScreen'
import ProfileImage from './ProfileImage'

function MainScreen() {

    let { logout, user } = useAuth()

    useEffect(() => {

    }, [])

    return (
        <>
            {user.image !== "" ? <HomeScreen /> : <ProfileImage />}
        </>
    )
}

export default MainScreen
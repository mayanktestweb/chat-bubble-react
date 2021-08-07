import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Conversation from './Conversation'
import HomeScreen from './HomeScreen'
import ProfileImage from './ProfileImage'

function MainScreen() {

    let { user } = useAuth()
    let history = useHistory()

    useEffect(() => {
        if (user.image === "") history.push("/profile_image")
    }, [user])

    return (
        <>
            {/* {user.image !== "" ? <HomeScreen /> : <ProfileImage />} */}
            <Switch>
                <Route path="/profile_image" >
                    <ProfileImage />
                </Route>
                <Route path="/home">
                    <HomeScreen />
                </Route>
                <Route path="/conversation" >
                    <Conversation />
                </Route>
                <Redirect to="/home" />
            </Switch>
        </>
    )
}

export default MainScreen
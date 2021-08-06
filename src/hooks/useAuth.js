import React, { useContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { loginUser, registerUser } from '../apis/authApis'
import UserContext from '../providers/UserProvider'

const useAuth = props => {

    let token = localStorage.getItem('token')
    let { user, setUser } = useContext(UserContext)



    let getUserByToken = (token) => {

    }

    let register = async ({ name, email, password }) => {
        try {
            let res = await registerUser({ name, email, password })
            setUser(res.user)
            localStorage.setItem('token', res.token)
        } catch (error) {
            console.log(error)
            alert('something went wrong')
        }
    }

    let login = async ({ email, password }) => {
        try {
            let res = await loginUser({ email, password })
            setUser(res.user)
            localStorage.setItem('token', res.token)
        } catch (error) {
            console.log(error)
            alert('something went wrong')
        }
    }

    let logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return { user, login, register, logout }
}

export default useAuth
import React, { createContext } from 'react'
import { io } from 'socket.io-client'
import consts from '../config/consts'
import { useDispatch } from 'react-redux'
import { store } from '../store'
import { onlineUsersLoaded } from '../store/onlineUsersReducer'

export const socket = io(consts.BASE_URL)

socket.on('receive_users', users => {
    console.log(users)
    store.dispatch({ type: onlineUsersLoaded.type, payload: users })
})


const SocketContext = createContext(socket)

export default SocketContext
import React, { useContext, useState, useEffect } from 'react'
import consts from '../config/consts'
import useAuth from '../hooks/useAuth'
import ImageListItem from '../components/ImageListItem'
import SocketContext from '../providers/SocketProvider'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById } from '../apis/usersApis'
import { useHistory } from 'react-router-dom'
import { usersToRenderUpdated } from '../store/usersToRenderReducer'

const HomeScreen = () => {

    let { user, logout } = useAuth()
    const socket = useContext(SocketContext)

    const onlineUsers = useSelector(state => state.onlineUsers)

    const usersToRender = useSelector(state => state.usersToRender)
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        socket.emit('request_users')
    }, [])

    useEffect(() => {
        (async () => {
            let users = []

            for (let onlineUser of onlineUsers) {
                try {
                    let isPresent = usersToRender.find(usr => usr._id === onlineUser)
                    if (!isPresent) {
                        let newuser = await fetchUserById({ id: onlineUser })
                        users.push(newuser)
                    } else users.push(isPresent)

                    users = users.filter(usr => usr._id !== user._id)
                    dispatch(usersToRenderUpdated(users))
                } catch (error) {
                    console.log(error)
                    alert('something went wrong')
                }
            }
        })();
    }, [onlineUsers])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}
        >
            <ImageListItem
                image={consts.BASE_URL + "/" + user.image}
                title={user.name}
                LeftComponent={<span className="material-icons hover_effect" onClick={logout} >logout</span>}
            />
            <div
                style={{
                    padding: '0 5',
                    flexGrow: 1,
                    overflowY: 'scroll',
                    scrollbarWidth: 'thin',
                    border: '1px solid gray',
                }}
            >
                <h4>Online People</h4>
                {usersToRender.map(user => (
                    <div key={user._id}
                        style={{
                            border: '1px solid gray'
                        }}

                        onClick={() => history.push(`/conversation`, { person: user })}
                    >
                        <ImageListItem
                            image={consts.BASE_URL + '/' + user.image}
                            title={user.name}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HomeScreen

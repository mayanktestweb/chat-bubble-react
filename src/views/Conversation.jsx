import React, { useState, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Icon from '../components/Icon'
import ImageListItem from '../components/ImageListItem'
import TextInput from '../components/TextInput'
import colors from '../config/colors'
import consts from '../config/consts'
import useAuth from '../hooks/useAuth'
import SocketContext from '../providers/SocketProvider'
import { messageAdded } from '../store/messagesReducer'



const ChatBubble = ({ person, message }) => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <div
                style={{
                    flexGrow: message.sender === person._id ? 0 : 1
                }}
            ></div>
            <div
                style={{
                    margin: 5,
                    padding: 5,
                    maxWidth: '60%',
                    alignSelf: message.sender === person._id ? 'flex-start' : 'flex-end',
                    borderRadius: 10,
                    backgroundColor: message.sender === person._id ? 'white' : colors.primaryLight,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: message.sender === person._id ? colors.lightText : colors.primary
                }}
            >
                {message.text}
            </div>

            <div
                style={{
                    flexGrow: message.sender === person._id ? 1 : 0
                }}
            >

            </div>
        </div>
    )
}





const Conversation = () => {

    let { person } = useLocation().state

    let messages = useSelector(state => state.messages)
    const dispatch = useDispatch()

    const socket = useContext(SocketContext)
    const { user } = useAuth()
    const [typedMessage, setTypedMessage] = useState("")
    const [messagesToRender, setMessagesToRender] = useState([])

    useEffect(() => {
        let msgs = messages.filter(msg => msg.sender === person._id || msg.receiver === person._id)
        setMessagesToRender(msgs)
    }, [messages])


    const sendMessage = () => {
        let msg = {
            _id: user._id + new Date().toISOString(),
            sender: user._id,
            receiver: person._id,
            text: typedMessage
        }
        socket.emit('send_message', msg)
        dispatch(messageAdded(msg))
        setTypedMessage("")
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}
        >
            <div
                style={{
                    borderBottom: '1px solid gray'
                }}
            >
                <ImageListItem
                    title={person.name}
                    image={consts.BASE_URL + '/' + person.image}
                />
            </div>




            <div
                style={{
                    flexGrow: 1,
                    overflowY: 'scroll',
                    scrollbarWidth: 'thin',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end'
                }}
            >
                {messagesToRender.map(msg => (
                    <ChatBubble
                        key={msg._id}
                        message={msg}
                        person={person}
                    />
                ))}
            </div>




            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 2
                }}
            >
                <TextInput
                    placeholder="Type message..."
                    style={{
                        flexGrow: 1,
                        width: 0,
                        flexGrow: 1
                    }}
                    value={typedMessage}
                    onChange={e => setTypedMessage(e.target.value)}
                />
                <Icon name="send" className="hover_effect"
                    onClick={sendMessage}
                />
            </div>
        </div>
    )
}

export default Conversation

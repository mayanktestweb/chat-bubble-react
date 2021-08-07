import { combineReducers } from "redux";
import messagesReducer from './messagesReducer'
import onlineUsersReducer from "./onlineUsersReducer";
import usersToRenderReducer from './usersToRenderReducer'

const reducer = combineReducers({
    messages: messagesReducer,
    onlineUsers: onlineUsersReducer,
    usersToRender: usersToRenderReducer
})

export default reducer
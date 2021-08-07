import { combineReducers } from "redux";
import messagesReducer from './messagesReducer'
import onlineUsersReducer from "./onlineUsersReducer";

const reducer = combineReducers({
    messages: messagesReducer,
    onlineUsers: onlineUsersReducer
})

export default reducer
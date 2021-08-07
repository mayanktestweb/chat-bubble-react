import { createAction, createReducer } from "@reduxjs/toolkit";

// sync actions
export const onlineUsersLoaded = createAction('onlineUsers:onlineUsersLoaded')


const reducer = createReducer([], {
    [onlineUsersLoaded.type]: (state, action) => {
        action.payload.forEach(onlineUser => {
            if (!state.includes(onlineUser)) state.push(onlineUser)
        })
    }
})

export default reducer
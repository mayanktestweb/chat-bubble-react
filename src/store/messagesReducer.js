import { createAction, createReducer } from "@reduxjs/toolkit";


export const messageAdded = createAction("messages:messageAdded")


const reducer = createReducer([], {
    [messageAdded.type]: (state, action) => {
        state.push(action.payload)
    }
})


export default reducer
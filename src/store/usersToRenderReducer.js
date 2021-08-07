import { createAction, createReducer } from "@reduxjs/toolkit";

export const usersToRenderUpdated = createAction("usersToRender:usersToRenderUpdated")


const reducer = createReducer([], {
    [usersToRenderUpdated.type]: (state, action) => {
        while (state.length) state.pop()
        action.payload.forEach(userToRender => state.push(userToRender))
    }
})


export default reducer
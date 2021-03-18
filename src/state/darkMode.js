import { DARK_MODE_CHANGE } from "./types"

const initialState = {
    isDarkMode: false
}

export const darkMode = (state = initialState, action) => {
    if (action.type !== DARK_MODE_CHANGE) {
        return state
    }
    console.log("change dark mode")
    console.log("state:", state)
    console.log("action:", action)

    return {...state, isDarkMode: !state.isDarkMode}
    
}

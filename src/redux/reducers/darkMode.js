import { DARK_MODE_CHANGE } from "../types"

export const darkMode = (state = {}, action) => {
    if (action.type !== DARK_MODE_CHANGE) {
        return state
    }
    
    const newState = { ...state, isDarkMode: !state.isDarkMode }
    
    return newState

}

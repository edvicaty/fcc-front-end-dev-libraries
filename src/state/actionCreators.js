import { DARK_MODE_CHANGE } from "./types"


export const changeDarkMode = () => {
    return {
        type: DARK_MODE_CHANGE,
    }
}
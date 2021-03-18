import { TEST_REDUCER } from "../types"

export const testReducer = (state = {}, action) => {
    if (action.type !== TEST_REDUCER) {
        return state
    }

    return { ...state, testState: !state.testState }

}
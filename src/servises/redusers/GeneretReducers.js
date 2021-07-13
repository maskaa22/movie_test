const initialState = {
    value:0
}

export const generetReducers = (state=initialState, action) => {
    switch (action.type){
        case 'INC': {
            return {...state, value: state.value + 1}
        }
        default: return state
    }
}
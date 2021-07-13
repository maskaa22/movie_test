const initialState = {
    movies:[]
}

export const moviesReducer = (state=initialState, action) => {
    switch (action.type){
        case 'SET_MOVIES': {
            return {...state, movies: action.payload}
        }
        default: return state
    }
}
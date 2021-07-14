import {
    SET_MOVIES_TYPE,
    SET_CURRENT_PAGES
}from "./actionTypes/ActionType"
const initialState = {
    movies:[],
    totalCount:0,
    currentPage:1,
    perPage:10,
    stars:1
}

export const moviesReducer = (state=initialState, action) => {

    switch (action.type){
        case SET_MOVIES_TYPE: {
            //return {...state, movies: action.payload}
             return {...state, movies: action.payload, totalCount: action.payload.totalCount}
        }
        case SET_CURRENT_PAGES: {
            console.log(action.payload);
            return {...state, currentPage: action.payload.currentPage   }
        }

        default: return state
    }
}
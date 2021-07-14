import {
    SET_MOVIES_TYPE, SET_CURRENT_PAGES
} from "./../actionTypes/ActionType"
export const setMoviesType = (payload)=>({type:SET_MOVIES_TYPE, payload})
export const setCurrentPage = (payload)=>({type:SET_CURRENT_PAGES,  payload})
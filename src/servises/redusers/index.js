import {combineReducers} from "redux";
import {moviesReducer} from "./MoviesReducers";
import {generetReducers} from "./GeneretReducers";

export const rootReducer = combineReducers({
    moviesReducer,
    generetReducers
})
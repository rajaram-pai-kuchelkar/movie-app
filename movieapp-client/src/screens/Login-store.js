import {createStore } from "redux";

const initialState = {

    "loginsetup" : {isOpen:false, loginTitle : "Login", visibility : "hidden"},
    "movies" :[],
    "filteredMovies" : []
}

function loginReducer(state=initialState,action){
    switch ( action.type) {
        case "LOGIN_SETUP" :
            return {...state, "loginsetup":action.payload};
        case "MOVIES" :
            return {...state, "movies":action.payload}; 
        case "FILTERED_MOVIES" :
            return {...state, "filteredMovies":action.payload}; 
        default :
            return state;    
    } 
}

export default createStore(loginReducer);


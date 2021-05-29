import {createStore } from "redux";

const initialState = {

    "loginsetup" : {isOpen:false, loginTitle : "Login", visibility : "hidden"}
}

function loginReducer(state=initialState,action){
    switch ( action.type) {
        case "LOGIN_SETUP" :
            return {...state, "loginsetup":action.payload};
        default :
            return state;    
    } 
}

export default createStore(loginReducer);



import React,{ useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Modal from "react-modal";
import Login from '../../login/Login';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { FormatColorResetRounded } from '@material-ui/icons';

Modal.setAppElement("#root");
const styles = {
    modalContent: {
        display: 'flex',
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        width : 800,
        left : '50%', 
    },
    
};


export default function Header(props){
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickHandler = ()=> {
        history.push('/login');
        
    }
    const loginsetup = useSelector(state=>state.loginsetup);


    const useStyles = makeStyles(()=>({
        displayType:{
            visibility: loginsetup.visibility,
        },
    }));

    const onClickbookshowHandler=()=>{
        if(loginsetup.loginTitle==="Login")
             toggleModal();
         else 
             history.push('/bookshow');
 
     }
    function toggleModal() {
      
     
      if(loginsetup.loginTitle==="Login" && loginsetup.visibility==="hidden"){
        const data = {isOpen:!loginsetup.isOpen, loginTitle: "Login", visibility : "hidden"}
        dispatch({"type" : "LOGIN_SETUP", payload: data});
      }
      else if ( loginsetup.loginTitle==="Logout" && loginsetup.visibility==="visible"){
        const data = {isOpen:false, loginTitle: "Login", visibility : "visible"}
        dispatch({"type" : "LOGIN_SETUP", payload: data});
      }
      else if ( loginsetup.loginTitle==="Login" && loginsetup.visibility==="visible"){
        const data = {isOpen:!loginsetup.isOpen, loginTitle: "Login", visibility : "visible"}
        dispatch({"type" : "LOGIN_SETUP", payload: data});
      }
      else{
        const data = { loginTitle: "Login", visibility : "hidden"}
        dispatch({"type" : "LOGIN_SETUP", payload: data});
      }
      

    }
    const classes = useStyles();

    
  
    return(
<div className= "header">
    <div id= "header-logo-container">
        <img className= "header-logo-container-logo" src={logo} alt="logo" height= "35px"/>
    </div>
    <Modal
             isOpen={loginsetup.isOpen}
             onRequestClose={toggleModal}
             contentLabel="Login"
             className="modal"
            
     >
        
     <Login toggleModal={toggleModal} from={"Header.js"}/>
    </Modal>

    <div  id = "header-button-booking" >
        <Button id="btn-booking" className={classes.displayType} variant="contained" color="primary" onClick = {onClickbookshowHandler}>Book Show</Button>
        
   </div> 
   <div id = "header-button-login" >
        <Button  id="btn-login"  variant="contained" onClick = {toggleModal} >{loginsetup.loginTitle}</Button>
   
   </div>   

</div>
    );
}

  

import React,{ useState } from 'react';

import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Modal from "react-modal";
import Login from '../../login/Login';
import { makeStyles } from '@material-ui/styles';

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


export default function Header(){
    const history = useHistory();
    const onClickHandler = ()=> {
        history.push('/login');
    }
    const [isOpen, setIsOpen] = useState(false);
    const [loginTitle, setLoginTitle] = useState("Login");
    const [visibility, setVisibility] = useState("hidden");
    

    const useStyles = makeStyles(()=>({
        displayType:{
            visibility: visibility,
        },
    }));
    
    function toggleModal() {
      if(loginTitle === "Login"){
        setIsOpen(!isOpen);

      }
      else {
        setLoginTitle("Login");
        setVisibility("hidden");
      }
      

    }
    const classes = useStyles();
  
    return(
<div className= "header">
    <div id= "header-logo-container">
        <img id= "header-logo-container-logo" src={logo} alt="logo" height= "35px"/>
    </div>
    <Modal
             isOpen={isOpen}
             onRequestClose={toggleModal}
             contentLabel="Login"
             className="modal"
            
     >
        
     <Login loginTitle = {loginTitle} setVisibility={setVisibility} setLoginTitle={setLoginTitle} toggleModal={toggleModal} from={"Header.js"}/>
    </Modal>

    <div  id = "header-button-booking" >
        <Button id="btn-booking" className={classes.displayType} variant="contained" type="primary"  >Book My Show</Button>
        
   </div> 
   <div id = "header-button-login" >
        <Button  id="btn-login"  variant="contained" onClick = {toggleModal} >{loginTitle}</Button>
   
   </div>   

</div>
    );
}

  
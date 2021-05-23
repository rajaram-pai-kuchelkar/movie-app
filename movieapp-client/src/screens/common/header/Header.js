
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';


export default function Header(){
    const history = useHistory();
    const onClickHandler = ()=> {
        history.push('/login');
    }
    
    return(
<div className= "header">
    <div id= "header-logo-container">
        <img id= "header-logo-container-logo" src={logo} alt="logo" height= "35px"/>
    </div>
    <div className= "header-button" >
        <Button id="btn-login" variant="contained" onClick = {onClickHandler} >Login</Button>
    </div>    
</div>
    );
}

  
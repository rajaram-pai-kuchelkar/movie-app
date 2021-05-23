import React , {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Login.css';
import Header from '../common/header/Header';

export default function Login(){

return (
   <React.Fragment>
        
        <div>
        
        <Link to="/">
            <Button id="btn-back" variant="contained"  >Back</Button>
        </Link>

        </div>

    </React.Fragment>

);

}

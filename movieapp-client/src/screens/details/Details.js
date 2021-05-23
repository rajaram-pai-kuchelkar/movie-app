import React , {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Details.css';
import Header from '../common/header/Header';

export default function Details(){

return (
   <React.Fragment>
        
        <div>
        This is Details Page
        <Link to="/">
            <Button id="btn-back" variant="contained"  >Back</Button>
        </Link>

        </div>

    </React.Fragment>

);

}

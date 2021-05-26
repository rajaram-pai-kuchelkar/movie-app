import React, {Fragment} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Details from './details/Details';

export default function Controller() {
    
return (
<Fragment>
   <Router>
   <div>
       <Route exact path="/" render={({history},props) => <Home {...props}  />} /> 
       {/* <Route exact path="/login" render={({history}, props) => <Login {...props}  />} /> */} 
       <Route exact path="/details" render={({history}, props) => <Details {...props}  />} />
   
   </div>
</Router>
</Fragment>
);

}
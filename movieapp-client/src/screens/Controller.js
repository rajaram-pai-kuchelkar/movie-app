import React, {Fragment} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import BookShow from './bookshow/BookShow';
import Confirmation from './confirmation/Confirmation';

export default function Controller() {
    
  

return (
<Fragment>
   <Router>
   <div>
       <Route exact path="/" render={({history},props) => <Home {...props}  />} /> 
       <Route exact path="/details" render={({history}, props) => <Details {...props}  />} />
       <Route exact path="/bookshow" render={({history}, props) => <BookShow {...props} baseUrl= {'/api/v1'} />} />
       <Route exact path="/confirm/{}" render={({history}, props) => <Confirmation {...props} baseUrl= {'/api/v1'} />} />
   
   </div>
</Router>
</Fragment>
);

}
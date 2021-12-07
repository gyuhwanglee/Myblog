import React from 'react';
import {BrowserRouter as Router  , Route , Switch} from 'react-router-dom'



function App() {
  return (
    <div className="container">
     <Router>
       <Switch>
         <Route exact path='/'  > 
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

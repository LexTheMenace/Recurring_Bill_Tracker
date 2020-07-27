import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar/Navbar';
import Index from './components/layout/Index/Index';
import { Provider } from './GlobalContext';

function App() {
  return (
    <Provider>
       <Router>
      <React.Fragment>
         <NavBar/>
         <div className='container'>
           <Switch>
            <Route exact path='/' component={Index}/>

           </Switch>
         </div>
         
      </React.Fragment>
    </Router>
    </Provider>
   
  );
}

export default App;

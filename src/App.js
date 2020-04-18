
import './App.css';
import Nav from './component/Header/Nav';
import React, {Component} from 'react';
import Home from './component/Home/Home';
  
class App extends Component
{
  render ()
  {
      return (
      <div className="container">
        <Home/>       
         
        </div>
         

      );
          }
}

export default App;

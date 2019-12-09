import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';
import SideMenu from './components/Menu';
import Jumbotron2 from './components/Jumbotron2'




class App extends React.Component {

  render() {
    return (
    <Router>
      <SideMenu/>
      <Jumbotron2/>
      

    </Router>
    );
  }
    
}

export default App;

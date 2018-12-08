import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Voice from '../pages/Voice';
import Stage from '../pages/Stage';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

//import './App.css';

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <Link to={'voice'}>
              <li>Voice</li>
            </Link>
            <Link to={'stage'}>
              <li>Stage</li>
            </Link>
            <Link to={'gallery'}>
              <li>Gallery</li>
            </Link>
            <Link to={'contact'}>
              <li>Contact</li>
            </Link>
          </ul>
          <Route exact={true} path='/' component={Home}/>
          <Route path='/voice' component={Voice}/>
          <Route path='/stage' component={Stage}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/contact' component={Contact}/>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Navigation;

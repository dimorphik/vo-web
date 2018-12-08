import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './pages/home/Home';

/*
import Voice from './pages/Voice';
import Stage from './pages/Stage';
import Gallery from './pages/Gallery';
*/
import Contact from './pages/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="rg-website">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link className="nav__link" to={'/'}>
                  Home
                </Link>
              </li>
              {/*
              <li className="nav__item">
                <Link className="nav__link" to={'voice'}>
                  Voice
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to={'stage'}>
                  Stage
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to={'gallery'}>
                  Gallery
                </Link>
              </li>
*/}
              <li className="nav__item">
                <Link className="nav__link" to={'contact'}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Route exact={true} path='/' component={Home}/> {/*
          <Route path='/voice' component={Voice}/>
          <Route path='/stage' component={Stage}/>
          <Route path='/gallery' component={Gallery}/>
*/}
          <Route path='/contact' component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

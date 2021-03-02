import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from './components/pages/Projects/Projects';
import Home from './components/pages/HomePage/Home'
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    
    <Router>
      <div className="Body">
          <Navbar />
          <div className='Content'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Projects' exact component={Projects} />
              <Route path='/Contact' exact component={Contact} />
            </Switch>
          <div className='Footer-Spacer'></div>
          </div>
          <Footer />
        </div>
      </Router>



  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateHire from './components/pages/PrivateHire';
import Games from './components/pages/Games';
import Menu from './components/pages/Menu';
import AfterSchoolClub from './components/pages/AfterSchoolClub';
import KidsParty from './components/pages/KidsParty';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {/* Promo section goes here */}
          <Route exact path='/' component={About} />
          <Route exact path='/privatehire' component={PrivateHire} />
          <Route exact path='/games' component={Games} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/after-school-club' component={AfterSchoolClub} />
          <Route exact path='/kidsparty' component={KidsParty} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

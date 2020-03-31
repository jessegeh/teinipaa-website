import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ZinePage from './pages/zinepage/zinepage.component';
import About from './pages/about/about.component';
import GuestBook from './pages/guestbook/guestbook.component';
import Header from './components/header/header.component';
import Toolbar from './components/toolbar/toolbar.component';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Toolbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/zine' component={ZinePage} />
        <Route path='/about' component={About} />
        <Route path='/vieraskirja' component={GuestBook} />
      </Switch>
    </div>
  );
}

export default App;

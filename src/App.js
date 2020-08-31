import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ZinePage from './pages/zinepage/zinepage.component';
import ZinePageTwo from './pages/zinepage/zinepagetwo.component';
import About from './pages/about/about.component';
import GuestBook from './pages/guestbook/guestbook.component';
import Toolbar from './components/toolbar/toolbar.component';
import Sidedrawer from './components/sidedrawer/sidedrawer.component';
import Backdrop from './components/backdrop/backdrop.component';

class App extends React.Component {
  state = {
    sidedrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return {sidedrawerOpen: !prevState.sidedrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sidedrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sidedrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <Sidedrawer drawerClickHandler={this.drawerToggleClickHandler} show={this.state.sidedrawerOpen}/>
        {backdrop}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/zine/' component={ZinePageTwo} />
          <Route path='/arkisto' component={ZinePage} />
          <Route path='/about' component={About} />
          <Route path='/vieraskirja' component={GuestBook} />
        </Switch>
      </div>
    );
  }
}

export default App;

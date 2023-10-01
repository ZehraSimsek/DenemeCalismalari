import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home.js';
import Post from './Components/Post.js';
import Users from './Components/Users.js';
import Error from './Components/Error.js';
// import User from './Components/User.js';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Users" activeClassName="active">Users</NavLink>
            </li>
            <li>
              <NavLink to="/Post" activeClassName="active">Posts</NavLink>
            </li>
          </ul>
        </nav>
      </div>


      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Users" component={Users } />
        {/* <Route path="/User/:id" component={User} /> */}
        <Route path="/Post" component={Post} />
        {/* Hata mesajı için route path */}
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;

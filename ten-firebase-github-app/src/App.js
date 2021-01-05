import React, {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import firebase from 'firebase/app'
import 'firebase/auth'

import Footer from './layout/Footer'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PageNotFound from './pages/PageNotFound'
import { UserContext } from './context/UserContext';
import Header from './layout/Header';

import FirebaseConfig from './config/FirebaseConfig';
//init firebase
firebase.initializeApp(FirebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="*" component={PageNotFound}/>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;

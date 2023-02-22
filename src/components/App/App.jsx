import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../Routing/Nav/Navigation';
import Footer from '../Routing/Footer/Footer';

import ProtectedRoute from '../Routing/ProtectedRoute/ProtectedRoute';

import InfoPage from '../MainComponents/InfoPage/InfoPage';
import AboutPage from '../MainComponents/AboutPage/AboutPage';
import UserPage from '../MainComponents/UserPage/UserPage';
import LandingPage from '../Log-Register/LandingPage/LandingPage';
import LoginPage from '../Log-Register/LoginPage/LoginPage';
import RegisterPage from '../Log-Register/RegisterPage/RegisterPage';
import AuditionForm from '../MainComponents/AuditionForm/AuditionForm';
import AuditionDetails from '../MainComponents/AuditionDetails/AuditionDetails';
import UpcomingAuditions from '../MainComponents/UpcomingAuditions/UpcomingAuditions';
import PastAuditions from '../MainComponents/PastAuditions/PastAuditions';
import EditAudition from '../MainComponents/EditAudition/EditAudition';
import AuditionAnalytics from '../MainComponents/AuditionAnalytics/AuditionAnalytics';
import Classifieds from '../MainComponents/Classifieds/Classifieds';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Redirect exact from='/' to='/home' />

          <Route
            exact
            path='/about'
          >
            <AboutPage />
          </Route>

          <ProtectedRoute
            exact
            path='/user'
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/details'
          >
            <AuditionDetails />
          </ProtectedRoute>

          <ProtectedRoute exact path='/form'>
            <AuditionForm />
          </ProtectedRoute>

          <ProtectedRoute exact path='/upcoming-auditions'>
            <UpcomingAuditions />
          </ProtectedRoute>

          <ProtectedRoute exact path='/past-auditions'>
            <PastAuditions />
          </ProtectedRoute>

          <ProtectedRoute exact path='/classifieds'>
            <Classifieds />
          </ProtectedRoute>

          <ProtectedRoute exact path='/edit/:id'>
            <EditAudition />
          </ProtectedRoute>

          <ProtectedRoute exact path='/analytics'>
            <AuditionAnalytics />
          </ProtectedRoute>

          <ProtectedRoute exact path='/info'>
            <InfoPage />
          </ProtectedRoute>

          <Route exact path='/login'>
            {user.id ? (
              <Redirect to='/user' />
            ) : (
              <LoginPage />
            )}
          </Route>

          <Route exact path='/registration'>
            {user.id ? (
              <Redirect to='/user' />
            ) : (
              <RegisterPage />
            )}
          </Route>

          <Route exact path='/home'>
            {user.id ? (
              <Redirect to='/user' />
            ) : (
              <LandingPage />
            )}
          </Route>

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

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

import './App.css';

function App() {
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
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from='/' to='/home' />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path='/about'
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path='/user'
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AuditionDetails else shows LoginPage
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
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to='/user' />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path='/registration'>
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to='/user' />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path='/home'>
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to='/user' />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
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

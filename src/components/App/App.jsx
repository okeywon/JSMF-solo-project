import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import AdminPage from '../AdminPage/AdminPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import DetailPage from '../AdminDetailView/AdminDetailView';
import DonatePage from '../DonationPage/DonationPage';
import ContactPage from '../ContactPage/ContactPage';
import Application from '../ApplyPage/ApplyPage';
import {StripeProvider} from 'react-stripe-elements';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {URLConfig} from "@cloudinary/url-gen";
import {Cloudinary} from "@cloudinary/url-gen";
import {CloudConfig} from "@cloudinary/url-gen";
// const apiKey = require('dotenv').config();

import './App.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LGqe5B33WMXzL0LydhqCqp2ybjBDzDaRpYxleitAJLkvVI6HIOoAgYw2q9ePOWeH7JPsxGmpNdpMtsB8bfxdMDx00hV6j1YaG');

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  let cloudConfig = new CloudConfig({cloudName: 'demo'});
  let urlConfig = new URLConfig({secure: true});
  let myImage = new CloudinaryImage('docs/shoes', cloudConfig, urlConfig);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            // shows DonatePage at all times (logged in or not)
            exact
            path="/donate"
          >
            <StripeProvider
              apiKey="pk_test_51LGqe5B33WMXzL0LydhqCqp2ybjBDzDaRpYxleitAJLkvVI6HIOoAgYw2q9ePOWeH7JPsxGmpNdpMtsB8bfxdMDx00hV6j1YaG"
            >
              <Elements stripe={stripePromise}>
                <DonatePage />
              </Elements>
            </StripeProvider>
          </Route>

          <Route
            // shows DonatePage at all times (logged in or not)
            exact
            path="/apply"
          >
            <Application cldImage={myImage} />
          </Route>

          <Route
            // shows DonatePage at all times (logged in or not)
            exact
            path="/contact"
          >
            <ContactPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/admin"
          >
            <AdminPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/admin/:id"
          >
            <DetailPage/>
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            <LandingPage />
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
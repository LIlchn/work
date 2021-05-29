import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Resume from "./components/Resume";
import "./style.css";
import SignUpPage from "pages/auth/SignUpPage";
import LogInPage from "pages/auth/LogInPage";
import HomePage from "pages/HomePage";
import CVsPage from "pages/CVsPage";
import VacancyCreationPage from "pages/VacancyCreationPage";
import { AuthenticationProvider } from "./context/AuthContext";
import Profile from "components/Profile";
import VacPage from "components/VacPage";

import { GlobalStyles } from "styles/GlobalStyles";
import Layout from "modules/Layout";
import { AnonymousRoute, PublicRoute, PrivateRoute } from "routes";
import CVCreation from "pages/CVCreation";
import NewVacs from "pages/NewVacs";
import NewCV from "pages/NewCV";
import CVPage from "pages/CVPage";

const App = () => {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Layout>
          <GlobalStyles />

          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/resume">
              <Resume />
            </PublicRoute>

            <PublicRoute path="/vacpage">
              <VacPage />
            </PublicRoute>

            <PublicRoute path="/vacancy/:id" exact>
              <VacPage />
            </PublicRoute>

            <PublicRoute path="/cvcreation">
              <CVCreation />
            </PublicRoute>

            <PublicRoute path="/vacancy-creation">
              <VacancyCreationPage />
            </PublicRoute>

            <AnonymousRoute path="/register">
              <SignUpPage />
            </AnonymousRoute>

            <AnonymousRoute path="/login" exact>
              <LogInPage />
            </AnonymousRoute>

            <PrivateRoute path="/profile" exact>
              <Profile />
            </PrivateRoute>

            <PublicRoute path="/user/:id" exact>
              <CVPage />
            </PublicRoute>

            <PublicRoute path="/newvacs">
              <NewVacs />
            </PublicRoute>

            <PublicRoute path="/newcv">
              <CVsPage />
            </PublicRoute>
          </Switch>
        </Layout>
      </BrowserRouter>
    </AuthenticationProvider>
  );
};

export default App;

//<PublicRoute path="/edit/:id" component={Edit} exact />

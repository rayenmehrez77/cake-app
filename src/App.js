import React, { Fragment, useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { Footer, Navbar } from "./Components";
import GlobalStyles from "./GlobalStyles";
import {
  AboutPage,
  BlogPage,
  ErrorPage,
  HomePage,
  LoginPage,
  ProductsPage,
} from "./Pages";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { EdamamContext } from "./context/Context";

function App() {
  const { user } = useContext(EdamamContext);

  if (!user) {
    return (
      <>
        <Route
          exact
          path="/login"
          render={() => (user ? <Redirect to="/" /> : <LoginPage />)}
        />
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

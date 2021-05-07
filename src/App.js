import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { Footer, Navbar } from './Components';
import GlobalStyles from './GlobalStyles';
import { AboutPage, BlogPage, ErrorPage, HomePage, LoginPage, ProductsPage } from "./Pages" 
import ContactPage from './Pages/ContactPage/ContactPage';
import { EdamamContext } from './context/Context'; 
import SignUpPage from './Pages/SignUpPage/SignUpPage';


function App() { 
  const { user } = useContext(EdamamContext)

  if(!user) {
     return <>
          <GlobalStyles /> 
            <Switch>
              <Route exact path="/login" component={LoginPage}/>  
              <Route exact path="/signup" component={SignUpPage}/>  
            </Switch>
        </>
  }

  return (
    <>
      <GlobalStyles /> 
      <Navbar/> 
      <Switch>
        <Route  exact path="/" component={HomePage} /> 
        <Route  exact path="/products" component={ProductsPage}/>  
        <Route  exact path="/about" component={AboutPage}/>  
        <Route  exact path="/blog" component={BlogPage}/>  
        <Route  exact path="/contact" component={ContactPage}/>  
        <Route  exact path="*" component={ErrorPage}/>  
      </Switch>
      <Footer/> 
    </>
  );
}

export default App;

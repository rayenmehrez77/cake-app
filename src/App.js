import { Route, Switch } from 'react-router';
import './App.css';
import { Navbar } from './Components';
import GlobalStyles from './GlobalStyles';
import { AboutPage, BlogPage, ErrorPage, HomePage, ProductsPage } from "./Pages" 
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      <GlobalStyles /> 
      <Navbar /> 
      <Switch>
        <Route  exact path="/" component={HomePage}/>  
        <Route  path="/products" component={ProductsPage}/>  
        <Route  path="/about" component={AboutPage}/>  
        <Route  path="/blog" component={BlogPage}/>  
        <Route  path="/contact" component={ContactPage}/>  
        <Route  path="*" component={ErrorPage}/>  
      </Switch>
    </>
  );
}

export default App;

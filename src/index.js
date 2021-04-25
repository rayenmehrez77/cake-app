import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { EdamamProvider } from './context/Context';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ajo6vw2g.us.auth0.com"
      clientId="W58FVhazitpEe7yyKJEYBczwkpTMGuhR"
      redirectUri={window.location.origin}
    >
      <EdamamProvider>
          <Router>
            <App />
          </Router>
      </EdamamProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

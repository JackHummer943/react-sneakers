import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';
import './index.scss';
import App from './App';
import 'macro-css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>  
        <Route  path='*'  element={<App />}/>
         </Routes>
    </Router>
  </React.StrictMode>,
document.getElementById('root'),
);


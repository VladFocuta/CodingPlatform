import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './frontend/styling/navbar.css';
import './frontend/styling/login.css';
import './frontend/styling/home.css';
import './frontend/styling/costumButton.css';
import './frontend/styling/main.css';
import './frontend/styling/problems.css';
import './frontend/styling/test.css';
import './frontend/styling/logo.css';
import './frontend/styling/profile.css';
import './frontend/styling/progress.css';
import './frontend/styling/login-page.css';
import './frontend/styling/glass-cards.css';
import './frontend/styling/adv-page.css';
import './frontend/styling/contact-form.css';
import './frontend/styling/home-glass.css';
import './frontend/styling/dashboard-page.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


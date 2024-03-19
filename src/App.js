// App.js
import './App.css'
import React from 'react';
import Header from './Header';

import Profile from './Profile';
import UpdatesFeedbackPage from './Feedback';

function App() {
  return (
    <div className="App">
      <p className= "homepage" >
         <Header />
      </p>
      <p className= "Login">
         <UpdatesFeedbackPage />
      </p>
      
    </div>
  );
}

export default App;


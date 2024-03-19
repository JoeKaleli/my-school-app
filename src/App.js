// App.js
import './App.css'
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import UpdatesFeedbackPage from './Feedback';

function App() {
  return (
    <div className="App">
      <Header />
      <UpdatesFeedbackPage />
      <Profile />
      <Footer />
      
    </div>
  );
}

export default App;


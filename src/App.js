import React from 'react';

// import { Counter } from './features/counter/Counter';
// import './App.css';
import Header from './components/header/Header'
import  {BrowserRouter as Router} from 'react-router-dom'

import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router >
        <Header /> 
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

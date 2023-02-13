import React from 'react';
import Nav from './Components/Nav/Nav.js';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured.js';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <main>
        <div className='container'>
          <Routes >
            <Route exact path='/' element={<HeroesFeatured />}>
            </Route>
            <Route path='/hero/:id'>
            </Route>
          </Routes >
        </div>
      </main> 
      <footer>
        <div className="container">
          <p>This content is kindly provided by <a href="https://www.superheroapi.com/">Superhero API</a></p>
        </div>
      </footer>
      </Router>
    </>
  );
}

export default App;

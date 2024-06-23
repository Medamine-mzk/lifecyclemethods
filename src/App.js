import React from 'react';
import ConstructorExample from './Components/ConstructorExample';
import DerivedStateExample from './Components/DerivedStateExample';
import ComponentDidMountExample from './Components/ComponentDidMountExample';
import ShouldComponentUpdateExample from './Components/ShouldComponentUpdateExample';
import GetSnapshotBeforeUpdateExample from './Components/GetSnapshotBeforeUpdateExample';
import ComponentDidUpdateExample from './Components/ComponentDidUpdateExample';
import ComponentWillUnmountExample from './Components/ComponentWillUnmountExample';
import Color from './Components/Color';
import Compteur from './Components/Compteur';
import Home from './ComponentsRouting/Home';
import Contact from './ComponentsRouting/Contact';
import About from './ComponentsRouting/About';

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
  /*
  return (
    <div>
        <h1>Exercice de gestion de compteur</h1>
        <Compteur />
      <hr />
      <h1>React Lifecycle Methods Examples</h1>
      <hr />
      <h2>Color Example</h2>
      <Color favCol="yellow" />
      <hr />
      <h2>Constructor Example</h2>
      <ConstructorExample />
      <hr />
      <h2>Derived State Example</h2>
      <DerivedStateExample data="Derived data" />
      <hr />
      <h2>Component Did Mount Example</h2>
      <ComponentDidMountExample data="Initial data" />
      <hr />
      <h2>Should Component Update Example</h2>
      <ShouldComponentUpdateExample />
      <hr />
      <h2>Get Snapshot Before Update Example</h2>
      <GetSnapshotBeforeUpdateExample data="New data" />
      <hr />
      <h2>Component Did Update Example</h2>
      <ComponentDidUpdateExample data="Updated data" />
      <hr />
      <h2>Component Will Unmount Example</h2>
      <ComponentWillUnmountExample />
      <hr />
    </div>
  );
  */
}

export default App;

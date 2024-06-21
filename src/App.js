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
import './App.css';

function App() {
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
}

export default App;

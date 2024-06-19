import React from 'react';

class ComponentWillUnmountExample extends React.Component {
  // Appelée juste avant que le composant soit retiré du DOM
  componentWillUnmount() {
    console.log('Component will unmount'); // Affiche un message dans la console
  }

  render() {
    return <div>Component is mounted</div>;
  }
}

export default ComponentWillUnmountExample;

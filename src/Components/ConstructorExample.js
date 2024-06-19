import React from 'react';

class ConstructorExample extends React.Component {
  constructor(props) {
    super(props); // Appel au constructeur de la classe parente
    this.state = { data: null }; // Initialisation de l'état local
    console.log('Constructor'); // Affiche un message dans la console
  }

  render() {
    return <div>Data: {this.state.data}</div>; // Rend le contenu du composant
  }
}

export default ConstructorExample;

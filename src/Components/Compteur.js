import React from 'react';

class Compteur extends React.Component {
  constructor(props) {
    super(props);
    // Déclaration de l'état initial
    this.state = {
      compteur: 0,
    };
  }

  // Méthode pour incrémenter le compteur
  incrementer = () => {
    this.setState(prevState => ({
      compteur: prevState.compteur + 1,
    }));
  };

  // Méthode pour décrémenter le compteur
  decrementer = () => {
    this.setState(prevState => ({
      compteur: prevState.compteur - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Compteur: {this.state.compteur}</h1>
        <button onClick={this.incrementer}>+</button>
        <button onClick={this.decrementer}>-</button>
      </div>
    );
  }
}

export default Compteur;

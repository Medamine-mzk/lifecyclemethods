import React from 'react';

class Compteur2 extends React.Component {
  constructor(props) {
    super(props);
    // Initialiser l'état avec `compteur` à 0
    this.state = {
      compteur: 0,
    };
  }

  // Méthode compute pour gérer 
  // l'incrémentation et la décrémentation
  compute = (op) => {
    let sign = op === '+' ? 1 : -1;
    let c = this.state.compteur + sign;
    this.setState({
      compteur: c,
    });
  };

  render() {
    return (
      <div>
        <div>
          Valeur du compteur : {this.state.compteur}
        </div>
        <div>
          <button onClick={() => this.compute('+')}>+</button>
          <button onClick={() => this.compute('-')}>-</button>
        </div>
      </div>
    );
  }
}

export default Compteur2;

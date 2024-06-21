import React from 'react';

class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    // Initialiser l'état avec les propriétés 
    //`monTexte`, `personnes`, et `personne`
    this.state = {
      monTexte: "Bienvenue à cette formation React",
      personnes: ["Ali", "Salah", "Mohamed"],
      personne: '',
    };
  }

  // Gestionnaire pour mettre à jour l'état lorsque le texte change
  changeHandler = (event) => {
    this.setState({ personne: event.target.value });
  };

  // Méthode pour ajouter une personne 
  //à la liste et réinitialiser le champ de texte
  addPerson = (event) => {
    event.preventDefault();
    let tab_personnes = this.state.personnes.slice();
    tab_personnes.push(this.state.personne);
    this.setState({
      personnes: tab_personnes,
      personne: '',
    });
    // Alternative pour mettre à jour l'état de manière immuable
    // this.setState({
    //   personnes: [...this.state.personnes, this.state.personne],
    //   personne: '',
    // });
  };

  render() {
    return (
      <div>
        <h1>{this.state.monTexte}</h1>
        <form onSubmit={this.addPerson}>
          <h2>Bonjour {this.state.personne}</h2>
          <input
            type="text"
            value={this.state.personne}
            onChange={this.changeHandler}
          />
          <button type="submit">Ajouter personne</button>
        </form>
        <h2>Liste des personnes</h2>
        <ul>
          {this.state.personnes.map((personne, index) => (
            <li key={index}>{personne}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Formulaire;

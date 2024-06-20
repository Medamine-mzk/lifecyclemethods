import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    // Initialisation de l'état
    this.state = { favoriteColor: "red" };
    console.log(this.state.favoriteColor); // Affichage de la couleur initiale
  }

  UNSAFE_componentWillMount() {
    console.log(this.state.favoriteColor);
    setTimeout(()=> { 
    this.setState({favoriteColor: this.props.favCol}); 
    }, 5000);
    }

  componentDidMount() {
    // Mise à jour de la couleur favorite en bleu après 10 secondes
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 10000);
  }

  render() {
    console.log(this.state.favoriteColor); // Affichage de la couleur actuelle
    return (
      <h1>Ma couleur favorite est : {this.state.favoriteColor}</h1>
    );
  }
}

export default Color;

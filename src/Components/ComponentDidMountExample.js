import React from 'react';

class ComponentDidMountExample extends React.Component {
    constructor(props) {
        super(props); // Appel du constructeur parent
        this.state = {
          data: null // Initialisation de l'état local
        };
      }
  // Cette méthode est appelée juste après que le composant a été inséré dans le DOM
  componentDidMount() {
    console.log('Component did mount'); // Affiche un message dans la console
    this.setState({ data: 'Component has mounted' }); // Met à jour l'état local
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}
// Ajout de defaultProps pour définir une valeur par défaut pour la prop `data`
ComponentDidMountExample.defaultProps = {
    data: 'Default data'
  };

export default ComponentDidMountExample;

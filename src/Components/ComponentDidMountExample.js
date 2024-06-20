import React from 'react';

class ComponentDidMountExample extends React.Component {
    constructor(props) {
        super(props); // Appel du constructeur parent
        this.state = {
          data: null // Initialisation de l'état local
        };
      }
  // Cette méthode est appelée juste 
  // après que le composant a été inséré dans le DOM
  componentDidMount() {
    // Affiche un message dans la console
    console.log('Component did mount'); 
    // Met à jour l'état local
    this.setState({ data: 'Component has mounted' }); 
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}
// Ajout de defaultProps pour définir 
// une valeur par défaut pour la prop `data`
ComponentDidMountExample.defaultProps = {
    data: 'Default data'
  };

export default ComponentDidMountExample;

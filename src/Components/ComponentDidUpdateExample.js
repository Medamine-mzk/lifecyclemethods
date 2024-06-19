import React from 'react';

class ComponentDidUpdateExample extends React.Component {
  // Appelée après la mise à jour du composant
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data !== this.props.data) {
      console.log('Data updated'); // Affiche un message dans la console
    }
  }

  render() {
    return <div>Data: {this.props.data}</div>;
  }
}

export default ComponentDidUpdateExample;

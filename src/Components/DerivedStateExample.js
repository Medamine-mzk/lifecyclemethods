import React from 'react';

class DerivedStateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  // Cette méthode est appelée avant chaque rendu, que ce soit au montage ou à la mise à jour
  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.data) {
      return { data: props.data }; // Met à jour l'état si les props ont changé
    }
    return null; // Ne met pas à jour l'état sinon
  }

  render() {
    return <div>Data: {this.state.data}</div>;
  }
}

export default DerivedStateExample;

import React from 'react';

class ShouldComponentUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Cette méthode décide si le composant doit être mis à jour
  shouldComponentUpdate(nextProps, nextState) {
    // Retourne vrai si l'état a changé
    return nextState.count !== this.state.count; 
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default ShouldComponentUpdateExample;

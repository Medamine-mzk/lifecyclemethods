import React from 'react';

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialiser l'état avec une propriété `value` pour stocker la sélection
    this.state = {
      value: 'React',
    };
  }

  // Gestionnaire pour mettre à jour l'état lorsque la sélection change
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  // Gestionnaire pour gérer la soumission du formulaire
  handleSubmit = (event) => {
    event.preventDefault();
    alert('Framework préféré : ' + this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choisissez votre framework préféré:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue.Js</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectForm;

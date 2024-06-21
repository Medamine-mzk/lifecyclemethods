import React from 'react';

class TextAreaForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialiser l'état avec une propriété `value` vide
    this.state = {
      value: '',
    };
  }

  // Gestionnaire pour mettre à jour l'état 
  // lorsque le contenu de la textarea change
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  // Gestionnaire pour gérer la soumission du formulaire
  handleSubmit = (event) => {
    event.preventDefault();
    alert('Description soumise : ' + this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description :
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TextAreaForm;

import React from 'react';
import axios from 'axios';

export default class ListPerson extends React.Component {
  state = {
    ListPersons: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ ListPersons: persons });
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.ListPersons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

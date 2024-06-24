import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Faire une requête GET à l'API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Mettre à jour l'état avec les données récupérées
        this.setState({ users: response.data, isLoading: false });
      })
      .catch(error => {
        // Gérer les erreurs
        this.setState({ error: error.message, isLoading: false });
      });
  }

  render() {
    const { users, isLoading, error } = this.state;

    // Afficher un message de chargement pendant la requête
    if (isLoading) {
      return <p>Chargement des utilisateurs...</p>;
    }

    // Afficher un message d'erreur en cas de problème
    if (error) {
      return <p>Une erreur s'est produite : {error}</p>;
    }

    // Afficher la liste des utilisateurs
    return (
      <div>
        <h1>Liste des utilisateurs</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;

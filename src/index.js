import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MonComposant from './Components/MonComposant';
import Formulaire from './Components/Formulaire';
import TextAreaForm from './Components/TextAreaForm';
import SelectForm from './Components/SelectForm';
import UserList from './Components/UserList';
import ListPerson from './Components/ListPerson';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MonComposant /> */}
    <ListPerson />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

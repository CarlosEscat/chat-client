import React from "react";
import { Route } from "react-router-dom";
import UserList from "./components/UsersList";
import MessageBoard from "./components/Message/MessageBoard";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserList />
        <Route exact path="/conversation" component={MessageBoard} />
      </div>
    );
  }
}

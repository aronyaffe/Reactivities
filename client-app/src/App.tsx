import React, { Component } from "react";
import "./App.css";
import { render } from "@testing-library/react";
import axios from "axios";
import { Header, List, ListItem } from "semantic-ui-react";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then(response => {
      this.setState({
        values: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2" icon="users" content="Reactivities" />
        <List>
          {this.state.values.map((value: any) => (
            <ListItem key={value.id}>{value.name}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default App;

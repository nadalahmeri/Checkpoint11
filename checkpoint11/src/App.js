import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Profile from "./Profile";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showHideDemo1: false,
      timer: 0,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
    this.setState({ showHideDemo1: !this.state.showHideDemo1 });
  }

  render() {
    const { showHideDemo1 } = this.state;

    return (
      <div className="App">
        <h3>Hello to my portfolio</h3>
        <br /><br />
        <p>If you want to know more about me please click the button below!</p>
       
        <Button onClick={() => this.hideComponent("showHideDemo1")}>
          see more informations
        </Button>
        <br /><br /><br />
        {showHideDemo1 && <Profile />}
        <br />
       
        
      </div>
    );
  }
}

export default App;

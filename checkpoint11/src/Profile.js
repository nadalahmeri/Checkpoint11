import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      FullName: "Lahmeri Nada",
      Profession: "enseignante universitaire",
      Bio: "My name is Nada Lahmeri, i was born on 28th november 1988 in Tunis. I am from Bizerte Rafraf and i live in Bardo, Tunis. Ten years of experience in teaching computer science in university and elementary school and training in private and public companies. I am a young new mom for a beautiful lovely kid Zayn, he is my power and inspiration.",
      ImgSrc:
        "https://media.licdn.com/dms/image/C4E03AQFCmtPJr6QevQ/profile-displayphoto-shrink_800_800/0/1517030932026?e=2147483647&v=beta&t=e-e6LNtImowBFz1vEhPRqVM-w74A8vQk1h_97aqj6Ok",
      timer: 0,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "30%",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Card style={{ width: "22rem", justifytext: "center" }}>
          <Card.Img
            style={{
              width: "22rem",
              justifyContent: "center",
              textAlign: "center",
            }}
            variant="top"
            src={this.state.ImgSrc}
          />
          <Card.Body>
            <Card.Title>{this.state.FullName}</Card.Title>
            <Card.Text>
              Profession : {this.state.Profession}
              <br />
              About me: {this.state.Bio}
              <br />
            </Card.Text>
            <Button variant="info">
              Timer: <>{this.state.timer}</>{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

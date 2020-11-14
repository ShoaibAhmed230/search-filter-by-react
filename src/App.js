import React, { Component } from "react";
import "./App.css";

const people = [
  {
    id: 1,
    name: "Sarah",
    email: "sarah@gmail.com",
    image: "/images/sarah-dp.png"
  },
  {
    id: 2,
    name: "shebi",
    email: "shebi@gmail.com",
    image: "/images/shebii-dp.jpg"
  },
  {
    id: 3,
    name: "kamran",
    email: "kamran@gmail.com",
    image: "/images/kamran-dp.jpg"
  },
  {
    id: 4,
    name: "zahid",
    email: "zahid@gmail.com",
    image: "/images/zahid-dp.jpg"
  },
  {
    id: 5,
    name: "ayesha",
    email: "ayesha@gmail.com",
    image: "/images/ayesha-dp.jpg"
  }
];

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: people,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term, people } = this.state;
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.searchHandler} value={term} />
        </form>
        {people.filter(searchingFor(term)).map((data) => (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h3>{data.email}</h3>
            <img src = {process.env.PUBLIC_URL + data.image}/>
          </div>
        ))}
      </div>
    );
  }
}

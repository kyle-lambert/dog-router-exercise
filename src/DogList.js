import React, { Component } from "react";
import { Link } from "react-router-dom";

class DogList extends Component {
  render() {
    return (
      <div>
        <h1 className="display-1 text-center">Dog List</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map(d => {
              return (
                <div key={d.name} className="col-4 text-center">
                  <Link to={`/dogs/${d.name}`}>
                    <div className="card">
                      <img
                        src={d.src}
                        className="card-img-top"
                        alt={d.name}></img>
                      <div className="card-body">
                        <h5 className="card-title">{d.name}</h5>
                        <p className="card-text">
                          {d.facts[Math.floor(Math.random() * d.facts.length)]}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DogList;

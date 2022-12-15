import React from "react";
import "./index1.css";
import left from "../assets/left.png";
import barbecue from "../assets/barbecue.png";
import pasta from "../assets/pasta.png";
import pizza from "../assets/pizza.jpg";
import musor from "../assets/delete.png";

class Card extends React.Component {
  constructor(prop) {
    super();
    this.state = {
      count: 0,
      countt: 0,
      counttt: 0,
      barbecue: barbecue,
      pasta: pasta,
      pizza: pizza,
      musor: musor,
    };
  }
  render() {
    const Plus = (count) => {
      this.setState({ count: this.state.count + 1 });
    };
    const Minus = (count) => {
      this.setState({ count: this.state.count - 1 });
    };
    const Pluss = (countt) => {
      this.setState({ countt: this.state.countt + 1 });
    };
    const Minuss = (countt) => {
      this.setState({ countt: this.state.countt - 1 });
    };
    const Plusss = (counttt) => {
      this.setState({ counttt: this.state.counttt + 1 });
    };
    const Minusss = (counttt) => {
      this.setState({ counttt: this.state.counttt - 1 });
    };
    return (
      <div className="container">
        <div className="first_box">
          <img className="img" src={left} />
          <h3>Shopping Continue</h3>
        </div>
        <hr className="hr" />
        <div className="second_box">
          <h3>Shopping cart</h3>
          <p className="type1">You have 3 item in your cart</p>
          
        </div>
        <div className="box_3">
          <img className="pizza" src={this.state.pizza} />
          <div className="type_3">
            <h3>Italy Pizza</h3>
            <p className="pp">Extra cheese and toping</p>
          </div>
          <h1 className="count">{this.state.count}</h1>
          <div className="icons">
            <button className="btn3" onClick={() => Plus()}>
              <img className="btn1" src={left} />
            </button>
            <button className="btn3" onClick={() => Minus()}>
              <img className="btn2" src={left} />
            </button>
          </div>
          <p className="cost">$23,14</p>
          <img className="musor" src={this.state.musor} />
        </div>
        <div className="box_3">
          <img className="pizza" src={this.state.barbecue} />
          <div className="type_3">
            <h3>Italy Pizza</h3>
            <p className="pp">Extra cheese and toping</p>
          </div>
          <h1 className="count">{this.state.countt}</h1>
          <div className="icons">
            <button className="btn3" onClick={() => Pluss()}>
              <img className="btn1" src={left} />
            </button>
            <button className="btn3" onClick={() => Minuss()}>
              <img className="btn2" src={left} />
            </button>
          </div>
          <p className="cost">$23,14</p>
          <img className="musor" src={this.state.musor} />
        </div>
        <div className="box_3">
          <img className="pizza" src={this.state.pasta} />
          <div className="type_3">
            <h3>Italy Pizza</h3>
            <p className="pp">Extra cheese and toping</p>
          </div>
          <h1 className="count">{this.state.counttt}</h1>
          <div className="icons">
            <button className="btn3" onClick={() => Plusss()}>
              <img className="btn1" src={left} />
            </button>
            <button className="btn3" onClick={() => Minusss()}>
              <img className="btn2" src={left} />
            </button>
          </div>
          <p className="cost">$23,14</p>
          <img className="musor" src={this.state.musor} />
        </div>
      </div>
    );
  }
}
export { Card };

import React from "react";
import "./Cart.css"

export default class Cart extends React.Component {

  render() {
    return (
      <div className="cart">   
        <div className="cart-header">
          <a className="cart-exit-btn" href="/" >
            <img alt="Back" src={process.env.PUBLIC_URL+"Arrow.png"} style={{ width: "100%", transform: "rotate(90deg)" }} />
          </a>
          <div className="cart-title">
            Dragon Art
          </div>
        </div>
        <div className="cart-body">
          <div style={{ padding: "10px", display: "flex", }}>
            <button className="cart-option-btn">
              <img className="cart-img-placeholder" src={process.env.PUBLIC_URL+"img-placeholder.jpg"} />
              <div className="cart-name" >
                <div>Mona Lisa</div>
                <div>14in x 14in</div>
                <div>$100</div>
              </div>
            </button>
            <button className="cart-option-btn">
              <img className="cart-img-placeholder" src={process.env.PUBLIC_URL+"img-placeholder-two.jpg"} />
              <div className="cart-name">
                <div>Starry Night</div>
                <div>18in x 7in</div>
                <div>$1000</div>
              </div>
            </button>
          </div>
          <div className="C-order-row">
            Total: $1100
            <a className="C-order-btn" href={`/${this.props.cartHref}`}>
              To Checkout
            </a>
          </div>
        </div>
      </div>
    )
  }
}
import React from "react"
import "./Option.css"

export default class Option extends React.Component {
  render() {
    return (
      <a className="option-btn" href={"/option-" + this.props.randHex} id={this.props.id}>
        <img className="img-placeholder" src={process.env.PUBLIC_URL + this.props.img_src} />
        <div className="name" >
          <div>{this.props.name}</div>
          <div style={{ fontSize: "14px" }}>
            {this.props.size}
          </div>
          <div>
            ${this.props.price}
          </div>
        </div>
      </a>
    )
  }
}
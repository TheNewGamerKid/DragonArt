import React from "react"
import "./Option.css"

export default class Option extends React.Component {
    constructor() {
        super()

    }

  render() {
    return (
      <div style={{ display: "flex", }} >
        <a className="option-btn" href={"/option-" + this.props.randHex} >
          <img className="img-placeholder" src={process.env.PUBLIC_URL+"img-placeholder.jpg"} />
          <div className="name" >
            <div>Mona Lisa</div>
            <div style={{ fontSize: "14px" }}>
              18in x 7in
            </div>
            <div>
              $100
            </div>
          </div>
        </a>
        <a className="option-btn" >
          <img className="img-placeholder" src={process.env.PUBLIC_URL+"img-placeholder-two.jpg"} />
          <div className="name" >
            <div style={{ fontSize: "85%" }} >Starry Night</div>
            <div style={{ fontSize: "14px" }}>
              20in x 22in
            </div>
            <div>
              $1000
            </div>
          </div>
        </a>
      </div>
    )
  }
}
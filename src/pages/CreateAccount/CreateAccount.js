import React from "react";
import "./CreateAccount.css"

export default class CreateAccount extends React.Component {
  constructor() {
    super()

    this.state={
      verCode: Math.floor((Math.random() * (99999 - 10000) + 10000)),
      errorCode: "",
      inputBorder: "1px solid #666"
    }
  }

  verCodeCheck = (e) => {
      if(parseInt(e.target.value) === this.state.verCode) {
        window.location.href = "/"
      } else if(parseInt(e.target.value) > 10000) {
        this.setState({ errorCode: "Please enter the code sent to your email", inputBorder: "1px solid red"})
      }
  }

  render() {
    console.log(this.state.verCode)
    return (
      <div className="create-account">
        <div className="CA-header">
          Dragon Art
        </div>
        <div className="CA-body">
          Email Verification Code
          <div className="CA-input-container">
            <input 
              className="CA-input"
              type="number"
              onChange={this.verCodeCheck}
              style={{ border: this.state.inputBorder }}
            />
            <div className="CA-error">
              {this.state.errorCode}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
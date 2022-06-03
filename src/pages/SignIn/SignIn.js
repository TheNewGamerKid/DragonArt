import React from "react";
import GoogleLogin from "react-google-login";
import "./SignIn.css";

export default class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            emailColor: "#666",
            emailWidth: "1px",
            emailClassName: "sign-in-input-label off",
            password: "",
            passwordColor: "#666",
            passwordWidth: "1px",
            passwordClassName: "sign-in-input-label off",
        }
    }

  responseGoogle = (response) => {
    console.log(response);
  }

  emailToggle = () => {
    if(this.state.emailClassName.indexOf("off") !== -1) {
      this.setState({ emailClassName: "sign-in-input-label on", emailColor: "#8370FF", emailWidth: "2px" })
    } else if(this.state.email === "") {
      console.log(this.state.email)
      this.setState({ emailClassName: "sign-in-input-label off", emailColor: "#666", emailWidth: "1px" })
    }
  }

  passwordToggle = () => {
    if(this.state.passwordClassName.indexOf("off") !== -1) {
      this.setState({ passwordClassName: "sign-in-input-label on", passwordColor: "#8370FF", passwordWidth: "2px" })
    } else if(this.state.password === "") {
      this.setState({ passwordClassName: "sign-in-input-label off", passwordColor: "#666", passwordWidth: "1px" })
    }
  }

  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-header">
          Dragon Art
        </div>
        <div className="sign-in-body">
          <div className="sign-in-inputs-container">
            <input 
              type="text" 
              className="sign-in-inputs" 
              style={{ borderColor: this.state.emailColor, borderWidth: this.state.emailWidth }}
              onChange={(e) => { this.setState({ email: e.target.value }) }}
              onFocus={this.emailToggle}
              onBlur={this.emailToggle}
            />
            <div className={this.state.emailClassName}>
              Email
            </div>
          </div>
          <div className="sign-in-inputs-container">
            <input 
              type="password" 
              placeholder={this.state.passwordPlaceholderText}
              className="sign-in-inputs" 
              style={{ borderColor: this.state.passwordColor, borderWidth: this.state.passwordWidth }}
              onChange={(e) => { this.setState({ password: e.target.value }) }}
              onFocus={this.passwordToggle}
              onBlur={this.passwordToggle}
            />
            <div className={this.state.passwordClassName}>
              Enter your Password
            </div>
          </div>
          <div className="sign-in-enter-btn-container">
            <a className="sign-up-btn"  href="/email-verification">
              Create Account
            </a>
            <a className="sign-in-enter-btn" href={`/${this.props.signInHref}`} >
              Sign In
            </a>
          </div>
          <div className="sign-in-OR-container">
            <div className="sign-in-OR-line">

            </div>
            <div className="sign-in-OR">
              OR
            </div>
          </div>
            <GoogleLogin
              clientId="219077171889-6md126o5kdpsi80k20n9nsqno2f2aada.apps.googleusercontent.com"
              render={renderProps => (
                <button className="google-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <img src={process.env.PUBLIC_URL + "googleIcon.png"} />
                  <div className="google-login-text">
                    Continue with Google
                  </div>
                </button>
              )}          
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
        </div>
      </div>
    )
  }
}
import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Checkout from './pages/Checkout/Checkout';
import Home from "./pages/Home/Home.js"
import CreateAccount from './pages/CreateAccount/CreateAccount';
import SignIn from "./pages/SignIn/SignIn.js"
import Settings from "./Components/Settings/Settings.js"
import Cart from "./pages/Cart/Cart.js"

export default class App extends React.Component {
  constructor() {
    super();

    this.state={
      cartHref: "checkout",
      signInHref: "",
      signedIn: true,
      rendered: false,
    }
  }

  signedInCheck = () => {
    if(this.state.rendered === false) {
      if(this.state.signedIn === false) {
        this.setState({ cartHref: "sign-in", signInHref: "" })
      } else {
        this.setState({ cartHref: "checkout", signInHref: "checkout" })
      }
      this.setState({ rendered: true })
    }
  }

  render() {
    this.signedInCheck()
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn signInHref={this.state.signInHref} />} />
        <Route path="/email-verification" element={<CreateAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/cart" element={<Cart cartHref={this.state.cartHref} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes> 
    );
  }
}
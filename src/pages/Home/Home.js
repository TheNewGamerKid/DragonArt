import React from 'react';
import OptionRender from "./Components/OptionRender/OptionRender.js"
import './Home.css';

export default class Home extends React.Component {

  render() {
    return(
      <div className="everything">
        <div className='top-bar'>
          <div className='top-row'>
            Dragon Art
            <div className='nav-bar'>
              <a href="/settings" className='nav-btn'>
                <img src={process.env.PUBLIC_URL + "./SettingsIcon.png"} />
              </a>
              <a href="/cart" className='nav-btn'>
                <img src={process.env.PUBLIC_URL + "./CartIcon.png"} />
              </a>
              <a href="/sign-in" className='nav-btn'>
                <img src={process.env.PUBLIC_URL + "./SignInIcon.png"} />
              </a>
            </div>
          </div>
          <div className='bottom-row'>
            <div className='search-bar'>
              <input className="search-bar-input" placeholder='Search for Art' />
              <img src={process.env.PUBLIC_URL + "./SearchIcon.webp"} />
            </div>
          </div>
        </div>
        <div className='options-container'>
          <OptionRender />
        </div>
      </div>
    )
  }
}
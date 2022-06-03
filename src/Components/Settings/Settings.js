import React from "react";
export default class Settings extends React.Component {

    SettingsButtonHandler = () => {
        return (
            <button
                className="settings-btn"
                onClick={() => {
                    console.log("You clicked the cart button")
                }}
            >
                <img alt="Settings" src={process.env.PUBLIC_URL+"SettingsIcon.png"} />
            </button>
        )
    }

    render() {
        return (
            <this.SettingsButtonHandler />
        )
    }
}
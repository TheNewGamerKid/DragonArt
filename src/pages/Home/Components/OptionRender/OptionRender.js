import React from "react"
import Option from "../Option/Option.js"
import "./OptionRender.css"

export default class OptionRender extends React.Component {
  
  OptionMap = () => {
    let tempArray = [
      {
        name: "Example One",
        price: 35.99,
        size: "17 in. by 18 in.",
        img_src: "./img-placeholder.jpg",
        id: 0,
      },
    ]
    let newArray = tempArray.map(item => {
      return (
        <Option 
          id={item.id}
          size={item.size}
          img_src={item.img_src}
          price={item.price}
          name={item.name}
        />
      )
    })

    return newArray;
  }

  render() {
    return (
      <this.OptionMap />
    )
  }
}
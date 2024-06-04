import React from "react"
import './App.css'
import Logo from './Imgs/logo.png'
import NikeShoe from './Imgs/nike-tn.png'
import StyleShoe from './Imgs/nike-tn2.jpeg'
import StyleShoe2 from './Imgs/nike-tn3.png'
import StyleShoe3 from './Imgs/nike-tn4.png'

function App() {

  return (
    <div>
      <header>
        <img src={Logo} alt="" />
        <div className="nav-buttons">
          <button>Men</button>
          <button>Women</button>
          <button>Kids</button>
          <button>Accessories</button>
          <button>Sales</button>
        </div>
      </header>
      <section className="hero">
        <img src={NikeShoe} alt="" className="main-image"/>
        <div className="hero-text">
          <div className="category">Men's Shoe</div>
          <h1>NIKE AIR MAX TN PLUS</h1>
          <div className="price">$180</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque magni reprehenderit iste illo, pariatur dolore eaque corporis reiciendis libero?</div>
          <div className="hero-images">
            <img src={StyleShoe} alt="image-2" />
            <img src={StyleShoe2} alt="image-3" />
            <img src={StyleShoe3} alt="image-4" />
          </div>
          <div className="select-size">Select Size</div>
          <div className="hero-buttons">
            <button className="size-button">US 8.5 &#8744;</button>
            <button>Add to Cart </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

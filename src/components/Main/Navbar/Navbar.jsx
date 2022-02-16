import React from 'react'
import "./navbar.css"
import { MenuItem } from "./MenuItem"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <a href="home">
                    <img src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808ce7dc544553a7f1b1e4_Black.svg" alt="Fitnesso" />
                </a>
            </div>
            <div className="right">
                <ul>
                    {MenuItem.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href = {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

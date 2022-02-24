import React, {useState} from 'react'
import "./navbar.css"
import { MenuItem } from "./MenuItem"



export default function Navbar() {
    const token = localStorage.getItem("token");
    
    // This should be for logout implementation, to remove token from localStorage
    // localStorage.removeItem("token")

    

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
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
                    {
                        isLoggedIn?  <a href='' className='login1'>Account</a> :  <a href='login' className='login1'>Log In</a>
                    }
               

                    
                </ul>
            </div>
        </div>
    </div>
  )
}

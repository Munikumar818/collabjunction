import React from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar (){
    return(
        <div className="navbar">
        <nav>
        <div className="nav-logo">
            <a href="#">
                <img src="logo.png" />
            </a>
        </div>
        <ul className="nav-links">
            <li className="link"><a href="#">About Us </a></li>
            <li id="link1" className="link"><a href="#">Features</a></li>
            <li id="link2" className="link"><a href="#">Interests</a></li>
            <li id="link3" className="link"><a href="#">Tutorial</a></li>
        </ul>
        <ul className="nav-links">
            <li className="link">
            <ul className="nav-links1">
                <li><SearchIcon style={{color: '#0F2847'}}/></li>
                <li><a href="#">Find Sponsors</a></li>
            </ul>
            
            </li>
            <button className="btn">Register</button>
        </ul>
        </nav>
        </div>
        
    )

}
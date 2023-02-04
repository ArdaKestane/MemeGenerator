import React from "react";

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src="src\Images\logo.png"></img>
            <div className="nav-header">
                <h1 className="nav-title">Meme Generator</h1>
                <p className="nav-project">React Course - Project 3</p>
            </div>
        </nav>
    )
}
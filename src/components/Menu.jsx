import React, { useState } from "react";
import './menu.css'

function Menu({ menu, handleMenu, handleBook }) {
    return (
        <div className={`menu ${menu && "open"}`}>
            <button onClick={handleBook}>Book</button>

            <a href="#contact" onClick={handleMenu}>Contact</a>
        </div>)
}

export default Menu;
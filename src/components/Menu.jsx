import React, { useState } from "react";
import './menu.css'

function Menu({ menu, handleBook, handleMenu }) {
    return (
        <div className={`menu ${menu && "open"}`}>
            <button onClick={handleBook}>Book</button>

            <a href="#contact" onClick={() => handleMenu(false)}>Contact</a>
        </div>)
}

export default Menu;
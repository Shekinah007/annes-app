import React, { useState } from "react";
import './menu.css'

function Menu({ menu, handleBook }) {
    return (
        <div className={`menu ${menu && "open"}`}>
            <button onClick={handleBook}>Book</button>

            <a href="#contact">Contact</a>
        </div>)
}

export default Menu;
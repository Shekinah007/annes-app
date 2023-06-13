import React, { useState } from "react";
import './menu.css'

function Menu({ menu, handleBook }) {
    return (
        <div className={`menu ${menu && "open"}`}>
            <button onClick={handleBook}>Book</button>
            <button>Contact</button>
        </div>)
}

export default Menu;
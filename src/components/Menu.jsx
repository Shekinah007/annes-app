import React, { useState } from "react";
import './menu.css'

function Menu({ menu }) {
    return (
        <div className={`menu ${menu && "open"}`}>
            <a href='#'>Book</a>
            <a href='#'>Contact</a>
        </div>)
}

export default Menu;
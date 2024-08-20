import React, { useState } from "react";
import './menu.css'

function Menu({ menu, handleBook, handleMenu }) {
    return (
        <div className={`menu ${menu && "open"}`}>
            <a href="#get-book" onClick={() => handleMenu(false)}>Book</a>
            <div className="book-underline"></div>
            <a href="#contact" onClick={() => handleMenu(false)}>Contact</a>
            <div className="contact-underline"></div>
        </div>)
}

export default Menu;
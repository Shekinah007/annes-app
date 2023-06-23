import React, { useState } from 'react'
// import "./books.css"
import "./book.css"

import { PaystackButton } from "react-paystack";
import bookImg from "../images/OIP.jpg"

const Book = ({ hanldeModal }) => {

    const publicKey = "pk_test_eb2e4ea24c9ae7e77dc4055679e1e6ee94a2f8de";
    const amount = 10000 // Remember, set in kobo!;
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Get Book",
        onSuccess: () =>
            hanldeModal(false),
        onClose: () => hanldeModal(false),
    }

    return (
        <div id="book" className='container'>

            {/* <span className="close-window fa-stack fa-lg" onClick={hanldeModal}>
                <i className="fa fa-square fa-stack-2x"></i>
                <i className="fa fa-times fa-stack-1x fa-inverse"></i>
            </span> */}

            <div className='item'>
                <img src={bookImg} alt='book' id="book-img" className='' />
                <div className='item-details'>
                    <p className='title'>Conquering Depression And Living Happily</p>
                    <p className='price'>N1500</p>
                </div>
            </div>
            <r />
            {/* <br /> */}


            <div className="checkout-form">
                <div className="checkout-field">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Phone</label>
                    <input
                        type="text"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <PaystackButton className="paystack-button" {...componentProps} />
            </div>
        </div>
    )
}

export default Book
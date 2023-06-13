import React, { useState } from 'react'
import "./books.css"

import { PaystackButton } from "react-paystack";
import bookImg from "../images/OIP.jpg"

const Book = () => {

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
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }

    return (
        <div className='container'>
            <img src={bookImg} alt='book' width='400px' />
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
import "./getbook.css";

import frontImg from "../images/front-cover.jpg";
import backImg from "../images/back-cover.jpg";

const GetBook = () => {
  return (
    <div id="get-book" className="section get-book ">
      <div className="book-sec">
        <div className="book-pri">
          <div className="book-container">
            <img src={frontImg} alt="book" />
            <img src={backImg} alt="book" />
          </div>
          <div>
            <div className="item">
              {/* <p className='title'>Conquering Depression And Living Happily</p> */}
              {/* <p className="price">N3000</p> */}
            </div>
            <p className="price-alt">₦3,000</p>
            <p className="pick-up">Payment:</p>
            {/* <p>Access Bank: <span className="color">0006688978</span></p>
                  <p>Account Name:<span className="color"> Anne Igah</span></p>
                  <p>Contact: <span className='color'>08061726535</span></p> */}
            <div className="pay-and-contact">
              <div className="">
                <p>Bank:</p>
                <p>Account Name:</p>
                <p>Contact:</p>
              </div>
              {/* <hr /> */}
              <div>
                <p className="color">
                  2235398743 <span className="text-sm">(UBA)</span>
                </p>
                <p className="color"> Anne Igah</p>
                <p className="color">08061726535</p>
              </div>
            </div>
            <br />
            <hr />
            <p className="pick-up">Pick Up Address:</p>
            <p className="address">24, Ayo Alabi Okeira Ogba, Lagos</p>
          </div>
        </div>
      </div>

      {/* <div className="checkout-form"> */}
      {/* <div className="checkout-field">
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
                <PaystackButton className="paystack-button" {...componentProps} /> */}
      {/* </div> */}

      <hr></hr>
      <div className="order">
        <p className="or">OR</p>
        <a
          className="amazon"
          href="https://www.amazon.co.uk/dp/B0C9S5R3TQ?ref_=pe_3052080_397514860"
          target="_blank"
          rel="noreferrer"
        >
          Click here to order from Amazon
          <i className="fa fa-1x fa-share-square-o"></i>
        </a>
        {/* <p>Alternatively</p> */}
        <a href="https://selar.co/s626v7" target="blank" className="selar-link">
          Buy or Order from Selar.co
          {/* <i className="fa fa-1x fa-share-square-o"></i> */}
        </a>
      </div>
      <hr></hr>

      {/* <br /> */}
    </div>
  );
};

export default GetBook;

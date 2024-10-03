import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { toast } from "sonner";
// import { ToastContainer, toast } from "react-toastify";

export const ContactForm = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Triggered!!");

    setLoading(true);
    emailjs
      .sendForm("service_5cvkiwd", "template_r01a70s", form.current, {
        publicKey: "n-moxVdFEthca5XTz",
      })
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          toast("Success!");
          //   toast("Sent Successfully!!!");

          setEmail("");
          setNumber("");
          setName("");
          setMessage("");
        },
        (error) => {
          //   toast("Something went wrong! Try again later");
          console.log("FAILED...", error.text);
          toast("Error!");
        }
      );
  };

  return (
    <div id="contact" className={`top-container`}>
      <h3 className="get" onClick={() => toast("hello world")}>
        Get in touch with me 👇
      </h3>
      {/* <hr /> */}
      <form ref={form} onSubmit={(e) => sendEmail(e)} className="contact-form">
        <div className="form-a">
          <div className="form-b">
            <div className="input-container">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-black outline-none p-2 rounded-sm"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black outline-none p-2 rounded-sm"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone_number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="text-black outline-none p-2 rounded-sm"
                // required
              />
            </div>
          </div>
          <div className="input-container">
            <textarea
              type="text"
              placeholder="Message"
              name="user_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-black outline-none p-2 rounded-sm"
              required
            />
          </div>
        </div>

        <button value={"Send"} className="send-btn">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

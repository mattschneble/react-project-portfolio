// import react and helper function
import { validateEmail } from "../utils/helpers";
import { useState } from "react";

// create the content for the Contact Me page and export it
export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  // create a function that will handle any user inputs
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setConfirmMessage("");

    // validate input types and store state in the appropriate variable
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // create a function designed to handle the form submission once ready
  const handleFormSubmit = (e) => {
    // prevent the default behavior of the form
    e.preventDefault();

    // validate the form inputs and set the appropriate error message if any are invalid
    if (!name) {
      setErrorMessage("Please enter your name, or else I won't know how to address you!");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address, so that I may contact you!");
      return;
    }

    if (!message) {
      setErrorMessage("Please enter a message, so that I know what you want to talk about!");
      return;
    }

    // if the form is valid, change the states to reflect that
    setName("");
    setEmail("");
    setMessage("");
}

// return the Contact Me page
return (
    <div className="d-flex flex-column">
        <form className="contactForm" onSubmit={handleFormSubmit}>
            <h2 className="d-flex justify-content-center">Contact Me</h2>
            <div className="d-flex flex-column">
                <label htmlFor="name">Name:</label>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name here"
                />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="email">Email Address:</label>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter your email here"
                />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="message">Message:</label>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your message here"
                />
            </div>
            <button type="submit">Submit</button>
        </form>

        {/* return the error message */}
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}

        {/* return the confirmation message */}
        {confirmMessage && (
            <div>
                <p className="confirm-text">{confirmMessage}</p>
            </div>
        )}
    </div>
);}
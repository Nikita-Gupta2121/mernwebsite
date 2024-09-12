import { Footer } from "./Footer";
import { app } from "./Firebase";
import { getDatabase, ref, set, push } from "firebase/database";
import { useState } from "react";

const db = getDatabase(app);

function Feedback() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [feedback, setfeedback] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const validateInputs = () => {
    if (name === "" || email === "" || contact === "" || feedback === "") {
      setValidationMessage("All fields are required.");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setValidationMessage("Please enter a valid email address.");
      return false;
    }
    if (contact.length !== 10 || isNaN(contact)) {
      setValidationMessage("Please enter a valid 10-digit contact number.");
      return false;
    }
    setValidationMessage(""); // Clear any previous validation messages
    return true;
  };

  const putdata = () => {
    if (!validateInputs()) {
      return; // Stop form submission if validation fails
    }

    const userRef = ref(db, 'users');
    const newUserRef = push(userRef);

    set(newUserRef, {
      name: name,
      email: email,
      contact: contact,
      feedback: feedback
    })
    .then(() => {
      alert("Thank you for your feedback!");
      // Clear the form after submission
      setname("");
      setemail("");
      setcontact("");
      setfeedback("");
    })
    .catch((error) => {
      console.error("Error storing data:", error);
    });
  };

  return (
    <>
      <div className="feedback-container">
        <div className="feedback-form">
          <h1>Your Feedback Is Valuable!</h1>
          <div className="form-fields">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <label>Contact Number:</label>
            <input
              type="text"
              placeholder="Enter your Contact Number"
              onChange={(e) => setcontact(e.target.value)}
              value={contact}
            />
            <label>Your Feedback:</label>
            <textarea
              placeholder="Your valuable feedback"
              onChange={(e) => setfeedback(e.target.value)}
              value={feedback}
            />
            {validationMessage && (
              <p className="validation-message">{validationMessage}</p>
            )}
            <button onClick={putdata}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Feedback;

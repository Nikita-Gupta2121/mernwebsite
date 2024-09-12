import React, { useState } from 'react';
import { Footer } from "./Footer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "./Firebase";

const auth = getAuth(app);

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupuser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("You Signed up successfully");
        navigate("/jewellery");
      })
      .catch((error) => {
        console.error("Error Signing up:", error.message);
        alert("Failed to Sign Up: " + error.message);
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h1>
              Welcome To <span style={{ color: "red" }}>Hastkala Heaven</span>
            </h1>
            <h3>Please Enter Your Details To Sign Up</h3>
          </div>

          <div className="login-form">
            <label>Email:</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="login-button">
              <button onClick={signupuser}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;

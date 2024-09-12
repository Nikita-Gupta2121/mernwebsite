import React, { useState, useEffect } from 'react';
import { Footer } from "./Footer";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase";
import Captcha from './Captcha';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for user session on mount
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the user state if authenticated
      } else {
        setUser(null); // Reset user state if not logged in
      }
    });
    return () => unsubscribe();
  }, []);

  const onCaptchaVerified = (isValid) => {
    if (isValid) {
      setCaptchaVerified(true);
      signupuser(); // Signup only after CAPTCHA is verified
    }
  };

  const signupuser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("You logged in successfully");
        setUser(userCredential.user); // Set the authenticated user
        navigate("/jewellery");
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        alert("Failed to log in: " + error.message);
      });
  };

  const validateInputs = () => {
    if (!email.includes('@') || !email.includes('.')) {
      setValidationMessage("Please enter a valid email.");
      return false;
    }
    if (password.length < 6) {
      setValidationMessage("Password should be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleLoginClick = () => {
    if (email === "" || password === "") {
      setValidationMessage("Please fill in all the details.");
    } else if (validateInputs()) {
      setValidationMessage(""); // Clear any existing validation messages
      setShowCaptcha(true); // Show CAPTCHA only after details are validated
      setCaptchaVerified(false); // Reset CAPTCHA verification status
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("You have been logged out.");
        setUser(null); // Reset the user state on logout
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h3>Welcome to Hastkala Heaven!</h3>
            <h1>Your Destination for Handcrafted Products</h1>
          </div>

          <div className="login-form">
            {user ? (
              <div className="logout-section">
                <p>Welcome, {user.email}!</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <>
                <label>Email:</label>
                <input
                  type="text"
                  className="input-field"
                  maxLength={30}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label>Password:</label>
                <input
                  type="password"
                  className="input-field"
                  maxLength={30}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                {validationMessage && (
                  <p className="validation-message">{validationMessage}</p>
                )}

                <div className="login-button">
                  <button onClick={handleLoginClick}>Login</button>
                  {showCaptcha && (
                    <Captcha onCaptchaVerified={onCaptchaVerified} />
                  )}
                </div>

                <p className="signup-link">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

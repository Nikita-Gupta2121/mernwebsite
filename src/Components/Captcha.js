import React, { useState, useEffect } from "react";
function Captcha({ onCaptchaVerified }) {
  const [captcha, setCaptcha] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCaptcha(result);
  };

  const verifyCaptcha = () => {
    if (captcha === inputValue) {
      onCaptchaVerified(true);
    } else {
      alert("Incorrect CAPTCHA, please try again.");
      generateCaptcha(); // Generate a new CAPTCHA if the input was incorrect
    }
  };

  return (
    <div className="captcha-background" style={{ marginTop: "15px", width: "400px" }}>
      <h5>Solve the following CAPTCHA to continue:</h5>
      <div style={{ display: "flex" }}>
        <div>
          <p
            style={{
              fontWeight: "bold",
              letterSpacing: "3px",
              paddingLeft: "20px",
            }}
          >
            {captcha}
          </p>
        </div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={verifyCaptcha}
            style={{marginTop:"1.2rem"}}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Captcha;
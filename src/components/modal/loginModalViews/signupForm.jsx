import React, { useState } from "react";

function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username, email);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
        <div style={{ width: "32px", height: "32px", marginRight: "8px" }}>
          {/* Icon goes here */}
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
        <div style={{ width: "32px", height: "32px", marginRight: "8px" }}>
          {/* Icon goes here */}
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <button type="submit" style={{ marginTop: "16px" }}>
        Sign Up
      </button>
    </form>
    <button onClick={props.backToLogin}>Back</button>
    </>
  );
}

export default SignUpForm;
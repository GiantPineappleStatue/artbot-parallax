import React, { useState } from "react";
import square from '../../../assets/accessiility.png'

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    value: "",
    error: false,
    general: false
  });

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    // Make API call to validate the username and password
    // ...

    // Set the message based on the result of the API call
    // ...

    setLoading(false);
  };

  return (<>
    <div>Log In</div>
    <form onSubmit={handleSubmit}>
    <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
      <div style={{ width: "32px", height: "32px", marginRight: "8px" }}>
        <img src={square} alt="react img"/>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          style={{ width: "100%", marginTop: "8px" }}
        />
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
      <div style={{ width: "32px", height: "32px", marginRight: "8px" }}>
        <img src={square} alt="react img"/>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={{ width: "100%", marginTop: "8px" }}
        />
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
      <div style={{ width: "32px", height: "32px", marginRight: "8px" }}>
        {/* Icon goes here */}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <label htmlFor="remember">Remember me:</label>
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={event => setRemember(event.target.checked)}
          style={{ marginTop: "8px" }}
        />
      </div>
    </div>
    {loading && <div>Loading...</div>}
    {message.value && (
      <div style={{ color: message.error ? "red" : "green", marginTop: "16px" }}>
        {message.value}
      </div>
    )}
    <button type="submit" style={{ marginTop: "16px" }}>
      Log In
    </button>
  </form>
  <button onClick={props.toSignup}>Sign Up</button>
  <button onClick={props.toRecover}>Recover</button>
  </>
  );
};

export default LoginForm;


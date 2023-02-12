import React, { useState } from 'react';

function RecoverForm(props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ value: '', error: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Perform password reset logic here
    // ...

    setLoading(false);
    setMessage({ value: 'Password reset email sent.', error: false });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}
        >
          <div style={{ flex: 1 }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </div>
        {loading && <div>Loading...</div>}
        {message.value && (
          <div
            style={{
              color: message.error ? 'red' : 'green',
              marginTop: '16px',
            }}
          >
            {message.value}
          </div>
        )}
        <button type="submit" style={{ marginTop: '16px' }}>
          Submit
        </button>
      </form>
      <p onClick={props.backToLogin}>Back</p>
    </>
  );
}

export default RecoverForm;

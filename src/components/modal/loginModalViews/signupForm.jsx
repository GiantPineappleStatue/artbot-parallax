import React, { useState } from 'react';
import { signUp, login } from '../../../services/util';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/reducers/auth.duck';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function SignUpForm(props) {
  const [username, setUsername] = useState({
    value: '',
    touch: false,
    error: false,
  });
  const [email, setEmail] = useState({ value: '', touch: false, error: false });
  const [password, setPassword] = useState({
    value: '',
    touch: false,
    error: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    touch: false,
    error: false,
  });
  const [remember, setRemember] = useState(false);
  const [profileImage, setProfileImg] = useState(null);
  const [message, setMessage] = useState({ message: '', error: false });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let responseData = await signUp({
      email: email.value,
      username: username.value,
      password: password.value,
      ...(props.inviteCode && { inviteCode: props.inviteCode }),
      ...(props.isMovie && { isMovie: props.isMovie }),
    });
    if (responseData.code === 'ABT0002') {
      if (process.browser) window.scrollTo(0, 0);
      setMessage({ message: responseData.message, error: true });
    }

    if (responseData.code === 'ABT0000') {
      setMessage({ message: responseData.message, error: false });
      setUsername({ value: '', touch: false, error: false });
      setEmail({ value: '', touch: false, error: false });
      setPassword({ value: '', touch: false, error: false });
      setConfirmPassword({ value: '', touch: false, error: false });
      // setMessage({ message: responseData.message, error: true, general: true });

      // let loginResponse = await login({
      //     username: username.value,
      //     password: password.value
      // });
      // if (loginResponse.code === 'ABT0000') {
      //     dispatch(
      //         loginUser(
      //             jwt_decode(loginResponse.data.userToken),
      //             loginResponse.data.userToken
      //         )
      //     );
      //     if (isMovie) router.push('/letsmakeamovie');
      //     else router.push('/welcome');
      // } else {
      //     setLoading(false);
      //     setMessage({ message: loginResponse.message, error: true, general: true });
      // }
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}
        >
          <div style={{ width: '32px', height: '32px', marginRight: '8px' }}>
            {/* Icon goes here */}
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              value={username.value}
              onChange={(e) =>
                setUsername({
                  value: e.target.value,
                  touch: true,
                  error: username.value ? false : true,
                })
              }
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}
        >
          <div style={{ width: '32px', height: '32px', marginRight: '8px' }}>
            {/* Icon goes here */}
          </div>
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
        <button type="submit" style={{ marginTop: '16px' }}>
          Sign Up
        </button>
      </form>
      <button onClick={props.backToLogin}>Back</button>
    </>
  );
}

export default SignUpForm;

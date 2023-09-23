import React, { useRef } from 'react';

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();


  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

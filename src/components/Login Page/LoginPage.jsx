import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {

  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleCloseClick = () => {
    setShowSignIn(false);
  };

  return (
    <div className="App">
      <button onClick={handleSignInClick}>Sign In</button>
      {showSignIn && (
        <div className="sign-in-modal">
          <div className="sign-in-modal-content">
            <button className="close-button" onClick={handleCloseClick}>
              X
            </button>
            <h2>Sign In</h2>
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
              <button type="submit">Sign In</button>
            </form>
            <div className="social-login">
              <button>+ Sign in with Facebook</button>
              <button>+ Sign in with Google</button>
            </div>
            <p>
              Don't have an account yet? Create new for free!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage

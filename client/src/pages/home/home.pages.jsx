import "./home.styles.css";
import LOGOWHITE from "../../assets/logo.png";
// import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="home-page">
      <section className="spreads-section">
        <div className="spreads"></div>
        <div className="spreads"></div>
      </section>
      <div className="home-container">
        <div className="login-conatiner">
          <div className="login-contents">
            <div className="image-container">
              <img className="brand-img" src={LOGOWHITE} alt="" />
            </div>
            <div className="login-container">
                <div className="login-content" onClick={() => loginWithRedirect()}>
                  <h2>Login</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

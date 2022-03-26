import "./home.styles.css";
import LOGOWHITE from "../../assets/logo.png";
import { useAuth0 } from '@auth0/auth0-react'
function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="home-page">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
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
                <button className="login-content" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from "react-router-dom";
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Resolution <span>Tracker</span> app
          </h1>
          <p>
          Welcome to Resolution Tracker, where your goals become reality. Whether you’re aiming for personal growth, healthier habits, or ambitious milestones, we make progress simple and motivating. Discover tailored tools, expert guidance, and seamless tracking—all designed to fuel your determination. Start shaping your future today!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
      </Wrapper>
  );
};

export default Landing;
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div>
        <h1>Find Your Dream Home</h1>

        <p>Premium properties. Trusted investments. Exceptional living.</p>

        <button onClick={() => navigate("/properties")}>
          Explore Properties
        </button>
      </div>
    </div>
  );
}

export default Home;

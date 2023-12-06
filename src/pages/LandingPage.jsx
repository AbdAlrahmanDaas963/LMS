import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h5>LandingPage (Public)</h5>
      <h1>
        <Link to={"/login"}>Login</Link>
      </h1>
    </div>
  );
}

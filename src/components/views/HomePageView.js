import { Link } from "react-router-dom";
//import "./HomePageView.css";
const HomePageView = () => {
  document.title = "Portfolio";
  return (
    <div>

      <h2>Welcome to my portfolio</h2>

      <Link to={"/encryption"}>
        <button className="btn">Encryption website</button>
      </Link>

    </div>
  );
};

export default HomePageView;

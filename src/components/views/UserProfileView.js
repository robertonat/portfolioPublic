import { Link } from 'react-router-dom';
import SideNavigation from './SideNavigation';
import './UserProfile.css'


const UserProfileView = (props) => {
  document.title = "User profile";
  const { startUp } = props;
  return (
    <div>
      <SideNavigation/>
      <h2>Welcome back </h2>
      <div className="flex-box">

        <div className="progress">
          <strong className="progressText">Continue Learning</strong>
          <br />
          <span className="line"></span>
          <br />
          <Link to={"/Articles/EncryptionDecryption"}>
            <button className="module" id="user">
              <div className="moduleHeader">Read: Introduction</div>
              <span className="line"></span>
              <p className="moduleContent">What is encryption and decryption? "progress element"</p>
            </button>
          </Link>
          <Link to={"/Articles/SubsitutionCipher"}>
            <button className="module" id="user">
              <div className="moduleHeader">Read: Subsitution Ciphers</div>
              <span className="line"></span>
              <p className="moduleContent">Learn about subsitution ciphers "progress element"</p>
            </button>
          </Link>
          <Link to={"/Articles/Quiz0"}>
            <button className="module" id="user">
              <div className="moduleHeader">Quiz: Subsitution Ciphers</div>
              <span className="line"></span>
              <p className="moduleContent">Test your knowledge about subsitution ciphers "progress element"</p>
            </button>
          </Link>
          <Link to={"/Articles/RC4Article"}>
            <button className="module" id="user">
              <div className="moduleHeader">Read: Stream Ciphers and RC4</div>
              <span className="line"></span>
              <p className="moduleContent">Learn about the stream cipher RC4 "progress element"</p>
            </button>
          </Link>
          <Link to={"/Articles/RC4Quiz"}>
            <button className="module" id="user">
              <div className="moduleHeader">Quiz: Stream Ciphers and RC4</div>
              <span className="line"></span>
              <p className="moduleContent">Test your knowledge about the stream cipher RC4 "progress element"</p>
            </button>
          </Link>
        </div>

        <div className="savedEncryptions">
          <strong> Saved Encryptions </strong>
          <p> saved encryptions have a character limit of 50 </p>
          <div id="List body"> </div>
        </div>


      </div>

      <div className="quizProgression">
        <strong>Quiz progression </strong><br />
        <div>
          <p id="quiz0">
          </p>
        </div>

        <div>
          <p id="RC4Quiz">
          </p>
        </div>
      </div>



    </div>
  );
}
export default UserProfileView;

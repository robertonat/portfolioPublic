import { Link } from "react-router-dom";
import './ArticlesPage.css'
import SideNavigation from "./SideNavigation";
const ArticlesView = () => {
  document.title = "Articles";
  return (
    <div>
      <SideNavigation></SideNavigation>
      <h1> Articles related to encryption</h1>
      <div>
      <Link to={"/encryption/Articles/EncryptionDecryption"}>
      <button className="articleBox">

      <strong className="articleBoxHeader">  Learn about Encryption and Decryption</strong>
      <span className="line"></span>
        <p className="articleBoxContent">Learn the uses behind encrypting and subsequently decrypting messages to keep them secure</p>

      </button>
      </Link>
      </div>
      

      <div >
      <Link to={"/encryption/Articles/SubsitutionCipher"}>
        <button className="articleBox">
          <strong className="articleBoxHeader" style ={{ marginLeft : -90 }}> Learn about Subsitution ciphers </strong>
          <span className="line"></span>
          <p className="articleBoxContent">Study this "one to one" type of ciphers with Ceasar Cipher and Vigenere Ciphers.</p>
        </button>
      </Link>
      </div>

      <div >
      <Link to={"/encryption/Articles/OtherSubsitutionCiphers"}>
        <button className="articleBox">
          <strong className="articleBoxHeader" style ={{ marginLeft : -90 }}> Subsitution cipher cont. </strong>
          <span className="line"></span>
          <p className="articleBoxContent">Learn about other Subsitution Ciphers and Subsitution Cipher's level of security.</p>
        </button>
      </Link>
      </div>


      <div >
      <Link to={"/encryption/Articles/RC4Article"}>
        <button className="articleBox">
          <strong className="articleBoxHeader" style ={{ marginLeft : -250 }}> Learn about RC4 </strong>
          <span className="line"></span>
          <p className="articleBoxContent">Learn about this once previously commonly used algorithm!</p>
        </button>
      </Link>
      </div>
      <br />
      <Link to={"/encryption"}>Home Page</Link>
    </div>
  );
};

export default ArticlesView;

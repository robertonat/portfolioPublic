import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import "./HomePage.css";


const EncryptionView = () => {
  document.title = "Encryption";
  return (
    <div>
      <SideNavigation />

      <h2>Welcome to the Encryption Tool</h2>
      <h3>Click on a cipher to get started.</h3>

      <Link to={"/encryption/CaesarCipher"}>
        <button className="btn">Caesar Cipher</button>
      </Link>

      <Link to={"/encryption/VigenereCipher"}>
        <button className="btn">Vigenere Cipher</button>
      </Link>

      <Link to={"/encryption/RC4Cipher"}>
        <button className="btn">RC4 Cipher</button>
      </Link>

      <Link to={"/encryption/DES"}>
        <button className="btn">DES Cipher</button>
      </Link>
      <br></br><br></br><br></br><br></br>
      <div className="box">
        <h3>More about sign up features</h3>
        <p>Sign up to learn about encryption through guided navigation of our site. With an account, you can also save your encryptions when you use one of our ciphers.</p>
      </div>
    </div>
  );
};

export default EncryptionView;
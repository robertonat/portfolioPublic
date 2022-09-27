import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideNavigation extends Component {
  render() {
    return (
      <div>
        <div className="sidenav">
          <Link to={"/encryption"}>Home Page</Link>

          <Link to={"/encryption/CaesarCipher"}>Caesar Cipher</Link>

          <Link to={"/encryption/VigenereCipher"}>Vigenere Cipher</Link>

          <Link to={"/encryption/RC4Cipher"}>RC4 Cipher</Link>

          <Link to={"/encryption/DESCipher"}>DES</Link>

          <Link to={"/encryption/Articles"}>Articles</Link>

          <Link to={"/"}> Portfolio</Link>

          <Link to={"/encryption/Login"}>Log in</Link>

          <Link to={"/encryption/Signup"}>Sign up</Link>
        </div>
      </div>
    );
  }
}
export default SideNavigation;
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePageContainer, 
        EncryptionContainer, 
        CaesarCipherContainer, 
        ArticlesContainer,
        VigenereCipherContainer, 
        DESContainer,
        RC4Container,
        UserProfileContainer,
        SignUpContainer,
        VerificationContainer,
        LogInContainer} from "./components/containers";

import {
        EncryptionDecryption,
        Quiz0,
        SubsitutionCipher,
        OtherSubsitutionCiphers
} from "./components/articles"

import './App.css';

const App = () => {
  return (
    <div className="App">
     <div>
     <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/encryption" element={<EncryptionContainer/>} />
        <Route path="/encryption/CaesarCipher" element={<CaesarCipherContainer/>} />
        <Route path="/encryption/VigenereCipher" element={<VigenereCipherContainer/>} />
        <Route path="/encryption/DESCipher" element={<DESContainer/>} />
        <Route path="/encryption/RC4Cipher" element={<RC4Container/>} />

        <Route  path="/encryption/Articles/Quiz0" element ={<Quiz0/>} />
        <Route path="/encryption/Articles" element={<ArticlesContainer/>} />
        <Route path="/encryption/Articles/SubsitutionCipher" element={<SubsitutionCipher/>} />
        <Route path="/encryption/Articles/OtherSubsitutionCiphers" element={<OtherSubsitutionCiphers/>} />
        <Route path="/encryption/Articles/EncryptionDecryption" element={<EncryptionDecryption/>} />
        
        <Route path="/encryption/UserProfile" element ={<UserProfileContainer/>}/>
        <Route path="/encryption/SignUp" element ={<SignUpContainer/>} />
        <Route path="/encryption/Verification" element ={<VerificationContainer/>} />
        <Route path="/encryption/Login" element={<LogInContainer/>}/>
      </Routes>

      <Routes>
        <Route path="/Mathisfun" element ={<Quiz0/>} />
      </Routes>
    </Router>
  
        </div>
    </div>
  );
}

export default App;

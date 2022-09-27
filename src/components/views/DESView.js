import { Link } from 'react-router-dom';
import SideNavigation from "./SideNavigation";
import "./ColumnLayout.css";

const DESView = (props) => {
  const {handleChange, handleSubmit} = props;
  document.title = "DES";
  return(

    <div>

        <SideNavigation/>

        <h1>DES </h1>
        <div className="grid-container">
          <div className="grid-item">
            <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Initial Text </label>
                <br/>
                <textarea type="textarea" name="initial" rows="10" cols="50" required={true} onChange={(e) => handleChange(e)}/>
                <br/>
                <br/>
                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Key: </label>
                <input type="text" name="key" required={true} onChange={(e) => handleChange(e)}/>
                <br/>
                <br />
                <label style={{ color: "#11153e", fontWeight: "bold" }}>
                Enable Animation
                </label>
                <br/>
                <input type="radio" name = "animation" value="on" required={true}  onChange={(e) => handleChange(e)}/>
                <label> on</label>
                <br/>

                <input type="radio" name = "animation" value="off" required={true}  onChange={(e) => handleChange(e)}/>
                <label> off</label>
                <br/>
                <br/>
                <button>
                  Submit
                </button>
            </form>
          </div>
          <div className="grid-item">
            <b>Encrypted text:</b>
            <div className="encryptedbox" style={{ overflow: "auto", overflowWrap: "break-word"}}>
              <h3 id="p1">Secret message</h3>
            </div>
          </div>
        </div>
        <br></br>
        <Link to={'/Articles/SubsitutionCipher'}>
        Learn more about DES Cipher
        </Link>
        <br></br>
        <Link to={'/encryption'} >
            Home Page
        </Link>
        </div>

  )



}
export default DESView;

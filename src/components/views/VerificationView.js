import SideNavigation from "./SideNavigation";
import "./LoginView.css"
const VerificationView = (props) => {
  document.title = "Verify";
  const { handleChange, handleSubmit } = props;
  return (
    <div>
      <SideNavigation />
      <div className="userbox">
      <h3>Verify your account</h3>
      <p>A 4 digit code was sent to your email. Enter it to verify</p>
      <form  onSubmit={(e) => handleSubmit(e)}>
      <div>
          <label id="userloglabel" htmlFor="userName">email</label>
          <input id="userloginput" type="text" name="email" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label id="userloglabel" htmlFor="userName">Verification Code</label>
          <input id="userloginput" type="text" name="verificationCode" onChange={(e) => handleChange(e)} />
        </div>

        <button>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default VerificationView;
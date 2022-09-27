import SideNavigation from "./SideNavigation";
import "./LoginView.css"
const SignUpView = (props) => {
  document.title = "Sign Up";
  const { handleChange, handleSubmit } = props;
  return (
    <div>
      <SideNavigation />
      <div className="userbox">
      <h3>Sign up</h3>
      <form  onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label id="userloglabel" htmlFor="userName">User Name</label>
          <input id="userloginput" type="text" name="username" required={true} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label id="userloglabel" htmlFor="userName">Email</label>
          <input id="userloginput" type="text" name="email" required={true} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label id="userloglabel" htmlFor="password">Password</label>
          <input id="userloginput" type="password" name="password" required={true} onChange={(e) => handleChange(e)} />
        </div>
        <label id="userloglabel" htmlFor="password">Repeat your password </label>
        <input id="userloginput" type="password" name="password" required={true} onChange={(e) => handleChange(e)} />
        <p className="passwordReqs">Password minimum length: 8</p> <br/>
        <p className="passwordReqs">Requires numbers</p><br/>
        <p className="passwordReqs">Requires Special character</p> <br/ >
        <p className="passwordReqs">Requires Uppercase letters</p> <br/ >
        <p className="passwordReqs">Requires Lowercase letters</p> <br/ >
        <br></br>
        <button>Sign up</button>
      </form>
      </div>
    </div>
  );
};

export default SignUpView;

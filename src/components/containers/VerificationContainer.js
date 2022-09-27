import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import VerificationView from '../views/VerificationView';
import awsconfig from '../../aws-exports';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify'

class VerificationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      verificationCode: "",
      redirect: false,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }



  handleSubmit = async event => {
    event.preventDefault();
    Amplify.configure(awsconfig);
    try {
        await Auth.confirmSignUp(this.state.email, this.state.verificationCode);
        console.log("Sign up confirmation was successful");
        this.setState({
            redirect: true
        });
      } catch (error) {
          console.log('error confirming sign up', error);
          alert("Error Signing Up. Ensure youre inputting the correct code");
      }
  }

  componentWillUnmount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return(
        <Navigate to="/encryption/UserProfile" replace />
      );
    }
    return (
      <VerificationView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
};

export default VerificationContainer;

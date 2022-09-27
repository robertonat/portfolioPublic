import Amplify from 'aws-amplify';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import LogInView from '../views/LogInView';
import { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';


class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      verify: false,
      verificationCode: 0,
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
    const email = this.state.email;
    const password = this.state.password;
    try {
      await Auth.signIn(email, password);
      this.setState({
        redirect: true,
      });
     
    } catch (error) {
      alert("Incorrect Email or Password");
      console.log('error signing in', error);
    }
    
  }

  componentWillUnmount() {
    this.setState({ redirect: false});

  }

  render() {

    if (this.state.redirect) {
      return(
      <Navigate to="/encryption/UserProfile" replace />
      );
    }

    return (
      <LogInView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
};

export default LogInContainer;

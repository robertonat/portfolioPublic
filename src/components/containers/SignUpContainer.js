import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import UserPool from "./UserPool"
import SignUpView from '../views/SignUpView';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../../models';
import awsconfig from '../../aws-exports';
import Amplify from 'aws-amplify';


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
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
    UserPool.signUp(this.state.email, this.state.password, [], null, (err, data) => {
      if (err) {
        console.log(err);
        alert("Email or Password unaccepted");
      }
      else {
        DataStore.save(
          new Users({
            "email": this.state.email,
            "encryptions": [],
            "Quiz0": 0,
            "RC4Quiz": 0,
            "userName": this.state.username
          })
        );
        this.setState({
          username: "",
          email: "",
          password: "",
          redirect: true,
        });


      }
    });
  }


  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return(
        <Navigate to="/encryption/Verification" replace />
      );
    }
    return (
      <SignUpView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
};

export default SignUpContainer;

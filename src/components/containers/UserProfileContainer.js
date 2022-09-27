import UserProfileView from '../views/UserProfileView';
import React, { Component } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../../models';
import { Link } from "react-router-dom";
import SideNavigation from '../views/SideNavigation';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';


class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedEncryptions: [],
      Quiz0Score: 0,
      RC4QuizScore: 0,
      loggedIn: false,
    };
  }

  async createList() {
    for (let word in this.state.savedEncryptions) {
      const lis = document.createElement("li")
      const node = document.createTextNode(this.state.savedEncryptions[word]);
      lis.appendChild(node);
      lis.style.overflow = 'auto'
      const element = document.getElementById("List body")
      element.appendChild(lis)

    }
  }

  async addScores() {
    let p = document.createElement("p")
    const node = document.createTextNode("Quiz 0 score: " + this.state.Quiz0Score + "/8")
    p.appendChild(node);
    let element = document.getElementById("quiz0")
    element.appendChild(p)

    const p2 = document.createElement("p")
    const node2 = document.createTextNode("RC4 Quiz score: " + this.state.RC4QuizScore + "/5")
    p2.appendChild(node2);
    const element2 = document.getElementById("RC4Quiz")
    element2.appendChild(p2)

  }
  async logInSetUp(){
    let email = "";
      await Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      }).then(user => email = user.attributes.email)
        .catch(err => console.log(err));
      const userMod = await DataStore.query(Users, c => c.email("eq", email));

      const singleUser = await DataStore.query(Users, userMod[0].id);
    this.setState({ savedEncryptions: singleUser.SavedEncryptions, loggedIn: true, RC4QuizScore: singleUser.RC4Quiz, Quiz0Score: singleUser.Quiz0 });
  }


  async componentDidMount() {
    try {
      Amplify.configure(awsconfig);
      await this.logInSetUp();
      console.log("Logging in");
      console.log(this.state.loggedIn);
    }
    catch (error) {
      this.setState({ loggedIn: false });
      console.log(error)
    }

    if(this.state.loggedIn){
      console.log("logged in now fixing it up")
      this.createList();
      this.addScores();
    }

  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <SideNavigation />
          <p> Please <Link to="../encryption/login">log in</Link> to access your account</p>
        </div>


      )
    }
    return (
      <UserProfileView />
    );
  }

};



export default UserProfileContainer;

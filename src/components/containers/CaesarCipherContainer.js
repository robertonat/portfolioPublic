import { Component } from 'react';
import CaesarCipherView from '../views/CaesarCipherView';


class CaesarCipherContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: "",
            numOfShifts: 0,
            animation: "off",
            alphabet: 'abcdefghijklmnopqrstuvwxyz'.split('')
        };
    } // sets the state to have the necessary variables for working the encryption

    caesarCipher = async () => {
        let lowerCaseStr = this.state.initial.toLowerCase(); //a lower case copy of the string
        let encrypted = ""
        let currentLetter = ''

        for (let i = 0; i < lowerCaseStr.length; i++) {
            currentLetter = lowerCaseStr[i];
            if (!currentLetter.match(/[a-z]/i)) { //checks if the current charcter is not alphabetic letter
                encrypted += currentLetter;
                continue;
            }
            let newIndex = Number(this.state.alphabet.indexOf(currentLetter)) + Number(this.state.numOfShifts); //calculates the shifted value 
            if (newIndex > 25) { newIndex = newIndex - 26; } // if the value is higher than the last letter of the alphabet it loops around
            if (this.state.initial[i] === this.state.initial[i].toUpperCase()) {
                encrypted += this.state.alphabet[newIndex].toUpperCase(); //this checks to see if the current letter was originally uppercase, to make the encrypted letter upper case
            }
            else {
                encrypted += this.state.alphabet[newIndex]; //else just add the encrypted lowercase letter
            }
        }

        document.getElementById("p1").innerHTML = encrypted; //updates the webpage with the encrypted text
        if (this.state.animation === "on") { //if the animation is enabled it saves the encrypted value for the animation function.
            this.setState({
                'encrypted': encrypted
            });
        }
    }
    caesarCipherAnimation = async () => {
        await this.caesarCipher(); //runs the caesarCipher function and makes this function wait for it to finish.

        let encryptedPlaceHolder = document.getElementById("p1").innerHTML; //takes the encrypted value that was placed from the Caesar Cipher function
        document.getElementById("p1").innerHTML = this.state.initial;

        let ticks = 250; //sets the tick for the animation to 250. Plans are to change it to scale with text length

        let initialPlaceHolder = this.state.initial;
        let i = 0;
        let timer = setInterval(onTick, ticks); // sets the timer for the animation with a function and tick rate
        let temp = initialPlaceHolder.split('')
        function onTick() {

            if (i === (initialPlaceHolder.length)) { // a condition to see if the function went through the length of the initial string
                clearInterval(timer); //if the function has gone through the initial string it clears the animation set up
            }

            /*Javascript strings are inmutable, as such in order to change the string I had to change it to an array, change the letter
            in the array and then turn the array back into a string. It is a necessary work around*/
            else {

                temp[i] = encryptedPlaceHolder[i];
                initialPlaceHolder = temp.join('')
                document.getElementById("p1").innerHTML = initialPlaceHolder; //sets the changed string to display on the webpage
                i++;
            }
        }
        //if(encryptedPlaceHolder.length <60) this.updateEncryptions(encryptedPlaceHolder); /this is relevant to user profiles.
    }




    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value //updates the states value to the most recently inputted value on the form
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.animation === "on") {
            this.caesarCipherAnimation();
        }
        else { this.caesarCipher(); }
    }

    render() {
        return (
            <CaesarCipherView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            /> // returns the view page while passing over the functions for the forms
        );
    }
};
export default CaesarCipherContainer;

import React, { Component } from "react";
import firebase from "./firebase";

export class App extends Component {
    handleClick = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
        let number = "+919633122512";
        let label = document.querySelector("label");
        firebase
            .auth()
            .signInWithPhoneNumber(number, recaptcha)
            .then((e) => {
                let code = prompt("enter your otp", "");
                if (code == null) return;
                e.confirm(code).then((result) => {
                    console.log(result.user, "user");
                    label.textContent =
                        result.user.phoneNumber + "Number Verified";
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        return (
            <div>
                <label htmlFor=""></label>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import firebase from "./firebase";

export class App extends Component {
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    this.onSignInSubmit();
                    console.log("recaptcha verified");
                },
                defaultCountry: "IN",
            }
        );
    };
    onSignInSubmit = (e) => {
        e.preventDefault();
        this.configureCaptcha();

        const phoneNumber = "+91" + this.state.mobile;
        console.log(phoneNumber);

        const appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                alert("OPT has been sent Successfully");
                // ...
            })
            .catch((error) => {
                // Error; SMS not sent
                alert("Somthing Went Wrong");
            });
    };
    render() {
        return (
            <div>
                <h1>LOGIN PAGE</h1>
                <form action="" onSubmit={this.onSignInSubmit}>
                    <div id="sign-in-button"></div>
                    <input
                        type="number"
                        name="mobile"
                        placeholder="Enter Mobile Number"
                        required
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <h1>Enter OTP</h1>
                <form action="">
                    <input
                        type="number"
                        name="mobile"
                        placeholder="Enter OTP"
                        required
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default App;

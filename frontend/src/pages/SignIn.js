import React from "react"
import SignInComp from "../components/SignInComp"


export default class SignIn extends React.Component {
    render() {
        return (
            <div className="background">
                <div>
                    <SignInComp />
                </div>
            </div>
        )
    }
}
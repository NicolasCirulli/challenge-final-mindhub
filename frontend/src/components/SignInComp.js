import image from '../assets/signIn.jpg'

const SignInComp = () => {

    return (
        <div className="backgroundSignIn">
            <div className="cardSign">
                <div className='contentSignIn'>
                <h1 className='titleSignIn'>It's great to see you again</h1>
                    <h2>Sign in Xplore</h2>
                    <form>
                        <div className='inputsSignIn'>
                            <input type="text" className='label-SI' placeholder=' Email'  />
                            <input type="password" className='label-SI' placeholder=' Password'  />
                            <input type="submit" className='linkSignIn' value="Sign in" />
                        </div>
                    </form>

                    </div>

                </div>
                <div
                    className="signUpImg"
                    style={{ backgroundImage: `url("${image}")`}}
                >
                    <div  className="parrSignUp">
                    <h1>Hello!</h1>
                    <p>Welcome again to our site. We have so many captivating projects for
                 you. Just sign up and visit our app store with different selections. And don't forget to share your
                 achievements with!
                    </p>
                    </div>
                </div>
            </div>
      
    )
}

export default SignInComp
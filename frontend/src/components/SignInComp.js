

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
            </div>
      
    )
}

export default SignInComp
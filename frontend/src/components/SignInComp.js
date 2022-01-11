import { Link } from 'react-router-dom'


const SignInComp = () => {

    return (
        <div className="backgroundSignIn">
            <div className="cardSign">
                <div className='contentSignIn'>
                    <h1 className='titleSignIn'>Sign in Xplore now!</h1>
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
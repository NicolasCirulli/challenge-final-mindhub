import countries from './Countries'
import image from '../assets/signUp.jpg'

const SignUpComp = () => {


    return (
        <div className="backgroundSign">
            <div className="cardSignUp">
                <div>
                    <div className='titlesSU'>
                        <h1 className='titleSignUp'>Enjoy the benefits</h1>
                        <h2>of beeing an Xplore user</h2>
                        <h3 className='titleSignUp'>Sign up Xplore</h3>
                    </div>
                    <form>
                        <div className='bodyFormSU'>
                            <div className='onlyInputs'>
                                <div className='namesSU'>
                                    <div className='inputName'>
                                        <label>Name</label>
                                        <input type="text" id="name" className='labelSU' />
                                    </div>
                                    <div className='inputLastame'>
                                        <label>Lastname</label>
                                        <input type="text" id="lastname" className='labelSU' />
                                    </div>
                                </div>
                                <div className='dataMail'>
                                    <div className='inputEmail'>
                                        <label>Email</label>
                                        <input type="text" id="email" className='labelSU' />
                                    </div>
                                    <div className='inputPassword'>
                                        <label>Password</label>
                                        <input type="password" id="password" className='labelSU' />
                                    </div>
                                </div>
                                <div className='adicionalInfo'>
                                    <div className='inputPhoto'>
                                        <label>Photo</label>
                                        <input type="text" id="photo" className='labelSU' />
                                    </div>
                                    <div className='inputCountry'>
                                        <label>Country</label>
                                        <select type="text" id="country" className='labelSU'>
                                            {countries.sort().map((country, index) => {
                                                return (
                                                    <option value="country" key={index} className='color-country'>{country}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='buttonsSignUp'>
                                <input type="submit" className='linkSignIn' value="Sign up" />
                            </div>
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
                    <p>It's great to see you in our game store. We have so many captivating projects for
                 you. Just sign up and visit our app store with different selections. And don't forget to invite
                 your friends to play together!
                    </p>
                    </div>
                </div>
        </div>
    )
}

export default SignUpComp
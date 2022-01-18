import "../styles/profile.css";

import {useSelector, useDispatch} from "react-redux"
import authActions from "../redux/actions/authActions";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer.user);
  localStorage.getItem("token") && !user && dispatch (authActions.signInWithToken());


  return (
    <>
      <div className="container profile">
        <div>
          <h1 className="profile-title">PROFILE</h1>
        </div>
        <div className="info-profile">
          <div className="profile-img-div">
            <img className="profile-img" src={user.image} />
          </div>
          <div className="profile-info">
          <h2 className="nameandcountry">{user.firstName} {user.lastName}</h2>
            <h2 className="nameandcountry">{user.userName}</h2>
            <h2 className="nameandcountry">{user.address}</h2>
          </div>
        </div> 
      </div> 
      <div className="container fav-div">
          <h3 className="fav-title">FAVORITE GAMES:</h3>
        </div>
        <div className="container favorites">
        <div className="e-card-ht-game">
          <div className="e-card-image-game">
            <div className="e-card-titleht">*nombre de juego*</div>
          </div>
          <div className="e-card-content">
            
          </div>
        </div>
        </div>
    </>
  );
}

import "../styles/profile.css";
import image from "../assets/gtav.jpg";

export default function Profile() {
  return (
    <>
      <div className="container profile">
        <div>
          <h1 className="profile-title">PROFILE</h1>
        </div>
        <div className="info-profile">
          <div className="profile-img-div">
            <img className="profile-img" src={image} />
          </div>
          <div className="profile-info">
          <h2 className="nameandcountry">*name* *lastname*</h2>
            <h2 className="nameandcountry">*nombre usuario*</h2>
            <h2 className="nameandcountry">*pais usuario*</h2>
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
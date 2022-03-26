import { useAuth0 } from "@auth0/auth0-react";
import "./profile.styles.css";
function Profile() {
  const { user } = useAuth0();
  return (
    <div className="profile-pages">
      <h1>Profile</h1>
      <div className="profile-bg"></div>


      <div className="profile-container">      
        <img className="pro-img" src={user.picture} alt="" />
        <div className="user-data">
          <h3>{user.name}</h3>
          <p>@{user.nickname}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

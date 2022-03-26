import React from "react";
import "./userbio.styles.css";
function UserBio() {
  const interests = ["Football", "Among Us", "UNO", "Chess", "CS GO","Cycling"]
  return (
    <div className="user-bio">
      <div className="details1">
        <h3>Areas Of Interest</h3>
        <div className="interest-container">
            {interests.map((interest)=>(
            <div className="intere">
            <p value={interest}>{interest}</p>
            </div>))}
        </div>
      </div>
      <div className="details2">
        <h3>Member Of</h3>
        <hr/>
        <div className="position1">
        {
          [...Array(5)].map((user, key) => (
            <div className="membership">
              {key}
            </div>
          ))
        }
        </div>
      </div>
        <div classname="details3">
          <h3>User Statistics</h3>
          <hr/>
          <div className="position2"></div>
          
        </div>
    </div>
  );
}

export default UserBio;

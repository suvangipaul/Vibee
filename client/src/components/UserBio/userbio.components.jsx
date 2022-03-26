import React from "react";
import { CLUB1 , CLUB2 , CLUB3 , CLUB4 , CLUB5 } from "../../assets";
import "./userbio.styles.css";
function UserBio() {
  const clubs = [ CLUB1 , CLUB2 , CLUB3 , CLUB4 , CLUB5 ]
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
         clubs.map((club, key) => (
          <div><img alt="" src={club} className="membership"/></div>
              
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

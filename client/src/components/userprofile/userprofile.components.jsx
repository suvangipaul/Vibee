import './userprofile.style.css';

function UserProfile(props) {

    return(
        <div className="profile-container">
            
        <h2>{props.username}</h2>
        <h2>{props.first_name}</h2>
        <h2>{props.last_name}</h2>
        <img src={props.avatar} height="455px" alt="" />
        
        </div>
    )

}

export default UserProfile
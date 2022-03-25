import './userprofile.style.css';

function UserProfile(props) {

    return(
        <div className="profile-container">
            {props.first_name + " " + props.last_name}
            <img src={props.avatar} alt="" />

        </div>
    )

}

export default UserProfile
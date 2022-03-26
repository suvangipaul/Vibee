import './userprofile.style.css';

function UserProfile(props) {

    return(
      <div className="profile-pages">

			<div className="profile-bg" />

			<div className="profile-container">

					<img className="pro-img" src={props.avatar} alt="" />
				<div className="user-data">
          	<h3>{props.first_name + " " + props.last_name}</h3>
					 <p>@{props.username}</p>


				</div>
			</div>
		</div>
	);
}


export default UserProfile

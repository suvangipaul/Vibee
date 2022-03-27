import Sidebar from "../../components/Sidebar/sidebar.components"
import { Rooms } from "../../components"
import { AV1, AV2, AV3, AV4, AV5, AV6, AV7 } from "../../assets"
import './dashboard.styles.css'
function Dashboard() {
  const avatars = [AV1, AV2, AV3, AV4, AV5, AV6, AV7]
  return (
    <div className="dash-page">
      <Sidebar/>
      <h1>Dashboard</h1>

      <div className="active-users">
        {
          avatars.map((user, key) => (
            <img className="user-icons" src={user} alt="" />
          ))
        }
      </div>
      <div className="rooms-container">
        <Rooms/>
      </div>
    </div>

  )
}

export default Dashboard
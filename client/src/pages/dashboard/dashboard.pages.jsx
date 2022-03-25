import Sidebar from "../../components/Sidebar/sidebar.components"
import { Rooms } from "../../components"
import './dashboard.styles.css'

function Dashboard() {
  return (
    <div className="dash-page">
      <Sidebar/>
      <h1>Dashboard</h1>

      <div className="active-users">
        {
          [...Array(5)].map((user, key) => (
            <div className="user-icons">
              {key}
            </div>
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
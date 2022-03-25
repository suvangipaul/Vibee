import './sidebar.styles.css'
import { TextField } from '@mui/material'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
function Sidebar() {
  const [togglesideBar, setToggleSideBar] = useState(false)

  const class_sidebar = togglesideBar ? "side-bar-inputs display-none" : "side-bar-inputs"
  const interests = ["Football", "Among Us", "UNO", "Chess", "CS GO","Cycling"]
  return (
    <div className='side-bar'>
      <span onClick={() => setToggleSideBar(!togglesideBar)}>{
        togglesideBar ? <>E</> : <>X</>
      }</span>
      <div className={class_sidebar}>
        <TextField id='interest' label="Interest" variant="outlined" select>
          {
            interests.map((interest)=>(<MenuItem value={interest}>{interest}</MenuItem>))
          }
        </TextField>
        <TextField id="location" label="Location" variant="outlined" />
        <TextField id="room-inp" label="Mode of Room" variant="outlined"select >
          <MenuItem value="Online">Online</MenuItem>
          <MenuItem value="Offline">Offline</MenuItem>
        </TextField>
      </div>
    </div>
  )
}

export default Sidebar
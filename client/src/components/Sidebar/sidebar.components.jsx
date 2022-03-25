import './sidebar.styles.css'
import { TextField } from '@mui/material'
import { useState } from 'react'
function Sidebar() {
  const [ togglesideBar, setToggleSideBar ] = useState(false)

  const class_sidebar = togglesideBar ? "side-bar-inputs display-none" : "side-bar-inputs"

  return (
    <div className='side-bar'>
      <span onClick={() => setToggleSideBar(!togglesideBar)}>{
        togglesideBar ? <>E</> : <>X</>
      }</span>
      <div className={class_sidebar}>
        <TextField id='interest' label="Interest" variant="outlined"/>
        <TextField id="location" label="Location" variant="outlined"/>
        <TextField id="room-inp" label="Mode of Room" variant="outlined"/>
      </div>
    </div>
  )
}

export default Sidebar
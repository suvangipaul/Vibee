import React from 'react'
import './userstats.styles.css'
function UserStats() {
  return (
    <div className='userstats'>
        <p className='title'>Novice</p>
      <div className="first">
        <div className='first-cnt-1'>
          <p>Followers</p>
          <p>Following</p>        
        </div>
        <div>
          <p>13,409 </p>
          <p>32,063</p>
        </div>
      </div>
      <p className='title'>Tokens</p>
      <div className="second">
        
      </div>
    </div>
  )
}

export default UserStats
import axios from 'axios'
import { useEffect, useState } from 'react'
function Profile() {
  const [ users, setUsers ] = useState(null) 
  useEffect(()=> {
    axios.get('https://random-data-api.com/api/users/random_user?size=30')
    .then((res) => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch((err) => console.error(err))
  }, [])
  return (
    <div className="pages">
      <h1>Profile</h1>
      {/* <h2>{users[0].first_name}</h2> */}
    </div>
  )
}

export default Profile
// https://retoolapi.dev/cOlkMs/data
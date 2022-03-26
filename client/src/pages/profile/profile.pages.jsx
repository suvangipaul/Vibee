import axios from 'axios'
// import { useEffect, useState } from 'react'
function Profile() {
  // const [ users, setUsers ] = useState(null) 
  // useEffect(()=> {
  //   axios.get('https://random-data-api.com/api/users/random_user?size=50')
  //   .then((res) => {
  //     console.log(res.data)
  //     setUsers(res.data)
  //   })
  //   .catch((err) => console.error(err))
  // }, [])
  return (
    <div className="pages">
      <h1>Profile</h1>
      {/* { users.map((user) => (
        <Link to={`/profile/${user.username}`}>
          <UserProfile {...user}/>  
        </Link>
      ))} */}
    </div>
  )
}

export default Profile
// https://retoolapi.dev/cOlkMs/data
import React, { useState } from 'react'

function Users() {
    let [ users, setUsers ] = useState([ 
                                {name: "John Doe", id: 1, career: "Software engineer"},
                                {name: "Jane Doe", id: 2, career: "Data scientist"},
                                {name: "Billy Doe", id: 3, career: "Cyber security analyst"},
                            ])
  return (
    <div className='users'>
        <h1>Users</h1>
        {users.map(function(user) {
            return (
                <div className='user'>
                    <h2>{user.name}</h2>
                    <p>{user.career}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Users

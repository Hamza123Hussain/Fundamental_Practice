'use client'
import React, { useState } from 'react'

const initialProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30,
}

const UserProfileComponent = () => {
  const [profile, setProfile] = useState(initialProfile)

  const updateProfile = (newData) => {
    setProfile((profile) => ({
      ...profile,
      name: newData.name,
      age: newData.age,
      email: newData.email,
    }))
  }

  const resetProfile = () => {
    setProfile(initialProfile)
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age}</p>
      <button
        onClick={() =>
          updateProfile({
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            age: 25,
          })
        }
      >
        Update Profile
      </button>
      <button onClick={resetProfile}>Reset Profile</button>
    </div>
  )
}

export default UserProfileComponent

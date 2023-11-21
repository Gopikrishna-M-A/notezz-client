'use client'
import React, { useState, useEffect } from 'react'
import ProfileCard from '../Components/ProfileCard'

const ProfileCardWrapper = ({ user, baseUrl }) => {

    const [profiles, setProfiles] = useState([])
  
    const fetchProfiles = async() => {
      try {
        const response = await fetch(`${baseUrl}/user`, { method: 'GET' })
        const data = await response.json();
        const creators = data.filter(user => user.creator === true);
        setProfiles(creators)
      }catch (err) {
        console.log(err)
      }
    }
    useEffect(() => {
  
      fetchProfiles()
  
    }, [])

  return (
    <div className="profiles-wrapper">
    {profiles.map(profile => <ProfileCard key={profile._id} profile={profile} />)}
    </div>
  )
}

export default ProfileCardWrapper
"use client";
import React, { useState, useEffect } from "react";
import ProfileCard from "../Components/ProfileCard";
import { Skeleton } from 'antd';


const ProfileCardWrapper = ({ user, baseUrl }) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProfiles = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/user`, { method: "GET" });
      const data = await response.json();
      const creators = data.filter((user) => user.creator === true);
      setProfiles(creators);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="profiles-wrapper">
      

      {loading
        ? // Display Skeleton while loading
          Array.from({ length: 10 }).map((_, index) => (
            <div className="profile-card">
              <Skeleton.Image
                key={index}
                active
                className="profile-img"
              />
              <Skeleton
                key={index}
                active
              />
            </div>
          ))
        : // Display TopRatedcard components when data is loaded
        profiles.map((profile) => (
          <ProfileCard key={profile._id} profile={profile} />
        ))
        }
    </div>
  );
};

export default ProfileCardWrapper;

'use client'
import React, { useEffect, useState } from 'react';
import TopRatedcard from "./TopRatedcard"
import { Skeleton } from 'antd';

const getTopCreators = (allUsers) => {
  const creators = allUsers.filter(user => user.creator);
  creators.sort((a, b) => b.downloads - a.downloads);
  const topCreators = creators.slice(0, 4);
  return topCreators;
};


const TopRated = ({baseUrl}) => {   


    const [topCreators, setTopCreators] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(`${baseUrl}/user`);
          const data = await response.json();
          setTopCreators(getTopCreators(data))
        } catch (error) {
          console.error('Error fetching top creators:', error);
        }finally{
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);


  return (
    <div className="top-rated-section section">
      <div className="top-rated-left">
        <div className="top-rated-title">
          Top-Rated <br /> Note Creators
        </div>
        <div className="top-rated-para">Discover Their Expertise</div>
      </div>

      <div className="top-rated-right">
        <div className="top-rated-card-wrapper">
        {loading ? (
            // Display Skeleton while loading
            Array.from({ length: 4 }).map((_, index) => (
              <div className='top-rated-card'>
              <Skeleton.Image key={index} active  className="top-rated-card-img" />
              </div>
            ))
          ) : (
            // Display TopRatedcard components when data is loaded
            topCreators.map((creator) => (
              <TopRatedcard key={creator._id} profile={creator} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRated;

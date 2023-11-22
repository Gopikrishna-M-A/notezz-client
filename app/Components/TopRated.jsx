'use client'
import React, { useEffect, useState } from 'react';
import TopRatedcard from "./TopRatedcard"

const getTopCreators = (allUsers) => {
  const creators = allUsers.filter(user => user.creator);
  creators.sort((a, b) => b.downloads - a.downloads);
  const topCreators = creators.slice(0, 4);
  return topCreators;
};


const TopRated = ({baseUrl}) => {   


    const [topCreators, setTopCreators] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${baseUrl}/user`);
          const data = await response.json();
          setTopCreators(getTopCreators(data))
        } catch (error) {
          console.error('Error fetching top creators:', error);
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
        {topCreators.map((creator) => (
            <TopRatedcard img={creator.avatar} name={creator.name}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;

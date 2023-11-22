import React from 'react'

const TopRatedcard = ({img,name}) => {
  return (
    <div className='top-rated-card'>
        <img src={`/images/${img}.png`} className="top-rated-card-img"></img>
        <div className="top-rated-card-title">{name.length > 11 ? `${name.slice(0, 10)}...` : name}</div>
    </div>
  )
}

export default TopRatedcard
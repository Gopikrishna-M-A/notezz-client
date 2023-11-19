import React from 'react'

const TopRatedcard = ({img}) => {
  return (
    <div className='top-rated-card'>
        <img src={`/images/${img}.png`} className="top-rated-card-img"></img>
        <div className="top-rated-card-title">John Doe</div>
    </div>
  )
}

export default TopRatedcard
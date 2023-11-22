import React from 'react'
import { DownloadOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import Link from 'next/link'


const ProfileCard = ({ profile }) => {
  return (
    <div className='profile-card'>
        <img className="profile-img" src={`images/${profile.avatar}.png`}></img>
        <div className="profile-card-details">
            <div className="profile-name">{profile.name.length > 11 ? `${profile.name.slice(0, 10)}...` : profile.name}</div>
            <div className="profile-downloads">
                <Button type="text" icon={<DownloadOutlined />} size='small'> &nbsp;{profile.downloads}</Button>
            </div>
        </div>
        <div className="profile-rating">
            <Rate disabled defaultValue={profile.rating}  style={{ fontSize: 16 }}/>
        </div>
        <Link className='link' href={`/profiles/profile/?id=${profile._id}`}><Button block className='profile-card-btn' type="primary" icon={<RightOutlined />} size='small'>Explore</Button></Link>
    </div>
  )
}

export default ProfileCard
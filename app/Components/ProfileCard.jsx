import React from 'react'
import { DownloadOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Rate } from 'antd';

const ProfileCard = () => {
  return (
    <div className='profile-card'>
        <img className="profile-img" src='images/girl1.png'></img>
        <div className="profile-card-details">
            <div className="profile-name">John Doe</div>
            <div className="profile-downloads">
                <Button type="text" icon={<DownloadOutlined />} size='small'>100+</Button>
            </div>
        </div>
        <div className="profile-rating">
            <Rate disabled defaultValue={2}  style={{ fontSize: 16 }}/>
        </div>
        <Button block className='profile-card-btn' type="primary" icon={<RightOutlined />} size='small'>Explore</Button>
    </div>
  )
}

export default ProfileCard
'use client'
import { useState, useEffect } from "react";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";


const SetiingsDetails = ({profile}) => {

  return (
    <div className="settings-profile-detail">
      <div className="row">
        <div className="settings-profile-name">{profile.name}</div>
        <EditOutlined />
      </div>
      <div className="row AI-C">
        <Rate disabled defaultValue={profile.rating} style={{ fontSize: 13 }} />
        <Button type="text" icon={<DownloadOutlined />} size="small">
        &nbsp;{profile.downloads}
        </Button>
      </div>
      {/* <div className="setting-profile-semester">Semester 7 </div>
      <div className="setting-profile-branch">Computer Science</div> */}
    </div>
  );
};

export default SetiingsDetails;

"use client"; 
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Rate, Switch } from "antd";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};



const Settings = () => {

  return (
    <div className='section settings-page'>
      <div className="page-title">Settings</div>
      <div className="setting-profile-img-wrapper">
        <img className="profile-img" src="/images/girl1.png" alt="" />
      </div>
      <div className="settings-profile-detail">
        <div className="row">
          <div className="settings-profile-name">John Doe</div>
            <EditOutlined />
          </div>
        <div className="row AI-C">
            <Rate disabled defaultValue={2} style={{ fontSize: 13 }} />
            <Button type="text" icon={<DownloadOutlined />} size="small">
              100+
            </Button>
          </div>
          <div className="setting-profile-semester">Semester 7 </div>
          <div className="setting-profile-branch">Computer Science</div>
      </div>
      <div className="controls-wwrapper">
        <div className="creator-toggle row AI-C">
          <div className="control-key">Creator</div>
          <Switch onChange={onChange} />
        </div>
      </div>
    </div>

  )
}

export default Settings
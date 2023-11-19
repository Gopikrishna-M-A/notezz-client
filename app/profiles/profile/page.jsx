import React from "react";
import { DownloadOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Rate, Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Profile = () => {
  return (
    <div className="section profile-page">
      <div className="profile-left-section">
        <div className="page-title">John Doe</div>
        <div className="profile-details">
          <Rate disabled defaultValue={2} style={{ fontSize: 13 }} />
          <Button type="text" icon={<DownloadOutlined />} size="small">
            100+
          </Button>
        </div>
        <Select
          className="branch"
          placeholder="Branch"
          style={{
            width: 120,
          }}
          options={[
            {
              value: "lucy",
              label: "Lucy",
            },
          ]}
        />
        <div className="semester-wrapper">
          <Button className="sem-btn" size="large"> S1 </Button>
          <Button className="sem-btn" size="large"> S2 </Button>
          <Button className="sem-btn" size="large"> S3 </Button>
          <Button className="sem-btn" size="large"> S4 </Button>
          <Button className="sem-btn" size="large"> S5 </Button>
          <Button className="sem-btn" size="large"> S6 </Button>
          <Button className="sem-btn" size="large"> S7 </Button>
          <Button className="sem-btn" size="large"> S8 </Button>
        </div>
        <div className="row">
          <Select
            className="subject"
            placeholder="subject"
            style={{
              width: 120,
            }}
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
          <Select
            className="module"
            placeholder="module"
            style={{
              width: 120,
            }}
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
        </div>
        <div className="page-cotrols row  AI-C">
          <Button shape="circle" icon={<LeftOutlined />} />
          <div className="page-number">page 1</div>
          <Button shape="circle" icon={<RightOutlined />} />
        </div>
        <div className="pdf-note"></div>
      </div>

      <div className="profile-right-section">
        <div className="profile-img-wrapper">
          <img className="profile-img" src="/images/girl1.png" alt="" />
        </div>
        <Button type="primary"  icon={<DownloadOutlined />} size="large">Download note</Button>
        <div className="rating-box">
          <div className="ratingbox-title">Rate and Review Profile</div>
          <Rate defaultValue={0} />
          <Button>Submit</Button>
        </div>
      </div>

    </div>
  );
};

export default Profile;

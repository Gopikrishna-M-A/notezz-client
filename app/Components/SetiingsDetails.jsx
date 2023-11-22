'use client'
import { useState, useEffect } from "react";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Rate, Modal, Radio } from "antd";


const SetiingsDetails = ({ profile, baseUrl }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Send a PATCH request to update the avatar with the newAvatar value
    // You can use fetch or any other method to send the request
    // Example using fetch:
    fetch(`${baseUrl}/user/${profile._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ avatar: selectedAvatar }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error
        console.log("Avatar updated successfully", data);
      })
      .catch((error) => {
        console.error("Error updating avatar", error);
      });

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const avatarOptions = [
    { name: "boy1", image: "/images/boy1.png" },
    { name: "boy2", image: "/images/boy2.png" },
    { name: "girl3", image: "/images/girl1.png" },
    { name: "girl4", image: "/images/girl2.png" },
    { name: "girl5", image: "/images/girl3.png" },
    { name: "girl6", image: "/images/girl4.png" },

  ];
  return (
    <div className="settings-profile-detail">
      <div className="row">
        <div className="settings-profile-name">{profile.name}</div>
        <EditOutlined onClick={showModal}/>
      </div>
      <div className="row AI-C">
        <Rate disabled defaultValue={profile.rating} style={{ fontSize: 13 }} />
        <Button type="text" icon={<DownloadOutlined />} size="small">
        &nbsp;{profile.downloads}
        </Button>
      </div>
      <Modal
        title="Change Avatar"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Radio.Group
          onChange={(e) => setSelectedAvatar(e.target.value)}
          value={selectedAvatar}
        >
          {avatarOptions.map((avatar) => (
            <Radio key={avatar.name} value={avatar.name}>
              <img
                src={avatar.image}
                alt={avatar.name}
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              {avatar.name}
            </Radio>
          ))}
        </Radio.Group>
      </Modal>
      {/* <div className="setting-profile-semester">Semester 7 </div>
      <div className="setting-profile-branch">Computer Science</div> */}
    </div>
  );
};

export default SetiingsDetails;

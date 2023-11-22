'use client'
import { useState ,useEffect} from "react";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Rate, Modal, Radio, Select,message } from "antd";


const SetiingsDetails = ({ profile, baseUrl }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [branchOptions, setBranchOptions] = useState([]);
  const [semesterOptions, setSemesterOptions] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const branchResponse = await fetch(`${baseUrl}/branch`);
        const branchData = await branchResponse.json();
        setBranchOptions(branchData);
  
        // Fetch semester options
        const semesterResponse = await fetch(`${baseUrl}/semester`);
        const semesterData = await semesterResponse.json();
        setSemesterOptions(semesterData);
      } catch (error) {
        console.error("Error fetching options", error);
      }
    }
    fetchdata()
    
  }, [selectedAvatar, selectedBranch, selectedSemester]);

  const showModal = () => {
    setIsModalVisible(true);
        // Fetch branch options when the modal is opened
  };
  const handleOk = () => {
    // Send a PATCH request to update the avatar with the newAvatar value
    // You can use fetch or any other method to send the request
    // Example using fetch:

      const requestBody = {};
      if (selectedAvatar) {
        requestBody.avatar = selectedAvatar;
      }
      if (selectedBranch) {
        requestBody.branch = selectedBranch;
      }
      if (selectedSemester) {
        requestBody.semester = selectedSemester;
      }
      
    fetch(`${baseUrl}/user/${profile._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error
        message.success("Profile updated successfully")
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
    { name: "girl1", image: "/images/girl1.png" },
    { name: "girl2", image: "/images/girl2.png" },
    { name: "girl3", image: "/images/girl3.png" },
    { name: "girl4", image: "/images/girl4.png" },

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
      {/* <Modal
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
      </Modal> */}
       <Modal
        title="Edit Profile"
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
        <div style={{ marginTop: 16 }}>
          <label htmlFor="branch">Branch:</label>
          <Select
            id="branch"
            style={{width:"100%"}}
            value={selectedBranch}
            onChange={(value) => setSelectedBranch(value)}
          >
            {branchOptions.map((branch) => (
              <Select.Option key={branch._id} value={branch.name}>
                {branch.name}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div style={{ marginTop: 16 }}>
          <label htmlFor="semester">Semester:</label>
          <Select
            style={{width:"100%"}}
            id="semester"
            value={selectedSemester}
            onChange={(value) => setSelectedSemester(value)}
          >
            {semesterOptions.map((semester) => (
              <Select.Option key={semester._id} value={semester.name}>
                {`sem ${semester.name}`}
              </Select.Option>
            ))}
          </Select>
        </div>
      </Modal>
      <div className="setting-profile-semester">Semester {profile.semester}</div>
      <div className="setting-profile-branch">{profile.branch}</div>
    </div>
  );
};

export default SetiingsDetails;

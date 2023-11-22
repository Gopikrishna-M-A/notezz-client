"use client";
import { useState, useEffect } from "react";
import {
  DownloadOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Button, Rate, Select, Cascader, message } from "antd";
import { useSearchParams } from "next/navigation";
import MyDocument from './MyDocument'

const ProfileLeft = ({ user, baseUrl }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [profile, setProfile] = useState({});
  const [options, setOptions] = useState();
  const [pdf,setPdf] = useState('')
  const [rating,setRating] = useState()
  const [value,setValue] = useState(false)


  const handleRatingChange = (value) => {
    setRating(value)
  }

  useEffect(() => {
    fetch(`${baseUrl}/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/user/info/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOptions(data.dataByBranch);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRatingSubmit = (value) => {
    fetch(`${baseUrl}/user/${id}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Rating added successfully', data);
        message.success('Thank you for your feedback!')
        // You can perform additional actions after successfully adding the rating
      })
      .catch(error => {
        console.error('Error adding rating', error);
        // Handle the error
      });
  }

  const onChange = (value) => {
    if (value && value.length >= 4) {
      setPdf(value[3]);
      setValue(true)
    }
  };

  const handleDownload = () => {
    if(pdf){
      const downloadUrl = `${baseUrl}/module/getPdf/${pdf}`;
      window.location.href = downloadUrl;

      fetch(`${baseUrl}/user/${id}/downloads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('Downloads added successfully', data);
          // You can perform additional actions after successfully adding downloads
        })
        .catch(error => {
          console.error('Error adding downloads', error);
          // Handle the error
        });
    }
  };

  return (
    <>
    <div className="profile-left-section">
      <div className="page-title">{profile.name}</div>
      <div className="profile-details">
        <Rate disabled value={profile.rating} style={{ fontSize: 13 }} />
        <Button type="text" icon={<DownloadOutlined />} size="small">
          &nbsp;{profile.downloads}
        </Button>
      </div>

      <Cascader
        style={{width:"fit-content"}}
        options={options}
        onChange={onChange}
        placeholder="Please select note"
        size="large"
      />

      {value && 
      <div className="pdf-note">
      <MyDocument  pdf={`${baseUrl}/module/getPdf/${pdf}`}/>
    </div>
    }
      

    </div>
    <div className="profile-right-section">
    <div className="profile-img-wrapper">
      <img className="profile-img" src={`/images/${profile.avatar}.png`} alt="" />
    </div>
    <Button onClick={handleDownload} type="primary" icon={<DownloadOutlined />} size="large">
      Download note
    </Button>
    <div className="rating-box">
      <div className="ratingbox-title">Rate and Review Profile</div>
      <Rate defaultValue={0} onChange={handleRatingChange} />
      <Button onClick={handleRatingSubmit}>Submit</Button>
    </div>
  </div>
  </>
  );
};

export default ProfileLeft;

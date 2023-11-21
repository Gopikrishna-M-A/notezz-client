'use client'
import { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Switch, Button } from "antd";
import axios from 'axios';
import Link from "next/link";


  

const SettingsControls = ({ profile, baseUrl}) => {
    // console.log(profile);
    const [creator, setCreator] = useState(profile.creator)

    const onChange = (checked) => {
        setCreator(checked)
        console.log(creator);
        profile.creator = checked
        axios.patch(`${baseUrl}/user/${profile._id}`, { creator: checked })
        .then(() => {
        //   alert("Updated")
        })
        .catch((error) => {
        //   alert("Error")    
        });
    };

    return (
        <div className="controls-wrapper">
        <div className="creator-toggle row AI-C">
            <div className="control-key">Creator</div>
            <Switch checked={creator} onChange={onChange} />
        </div>   
        { creator && <Link href='/settings/upload'><Button type="primary" icon={<UploadOutlined/>} className="upload-btn" style={{width:"150px"}}>Upload Notes</Button></Link>  }
        </div>
    );
}

export default SettingsControls
'use client'
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Select, Upload, message } from "antd";


const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadPage = () => {
  return (
    <div className="section upload-page">
      <div className="page-title">Add Note</div>
      <div className="row">
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
        <Select
          className="Semester"
          placeholder="Semester"
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
      <div className="row">
        <Select
          className="Subject"
          placeholder="Subject"
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
          className="Module"
          placeholder="Module"
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
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Button type="primary" style={{width:"120px"}} >Add module</Button>

    </div>
  );
};

export default UploadPage;

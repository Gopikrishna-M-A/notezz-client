"use client";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Select, Upload, message, Form } from "antd";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const UploadForm = ({ baseUrl, session }) => {


  const [form] = Form.useForm();
  const [allBranch, setAllBranch] = useState([]);
  const [allSemester, setAllSemester] = useState([]);
  const [branch, setBranch] = useState([]);
  const [semester, setSemester] = useState([]);
  const [subject, setSubject] = useState([]);

  const handleBranchChange = (value) => {
    setBranch(value);
    console.log("branch:", value);
  };

  const handleSemChange = (value) => {
    setSemester(value);
    console.log("sem:", value);
  };

  

  useEffect(() => {
    const fetchSemester = async () => {
      try {
        const response = fetch(`${baseUrl}/branch`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setAllBranch(data);
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchSemester();
  }, []);

  useEffect(() => {
    const fetchSemester = async () => {
      try {
        const response = fetch(`${baseUrl}/semester`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setAllSemester(data);
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchSemester();
  }, []);


  useEffect(() => {
    const fetchSemester = async () => {
      try {
        const response = fetch(`${baseUrl}/subject/branch/${branch}/sem/${semester}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setSubject(data);
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchSemester();
  }, [semester]);



  const onFinish = (values) => {
    const formData = new FormData();
    // console.log("Success:", values);

    formData.append("pdf", values.pdf[0].originFileObj);
    formData.append("module", values.module);
    formData.append("subject", values.subject);
    formData.append("semester", values.semester);
    formData.append("branch", values.branch);
    formData.append("user", session._id);

    // console.log("formData:", formData);

    try {
      const response = fetch(`${baseUrl}/module`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) alert(data.error);
          else alert(data.success);
          form.resetFields();
        });
    } catch (err) {
      alert("An error occurred");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  const options = allSemester.map((item) => ({
    value: item._id,
    label: `S${item.name}`,
  }));

  const optionsbranch = allBranch.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const optionsSubject = subject.map((item) => ({
    value: item._id,
    label: item.name,
  }));


  return (
    <Form
        form={form}
        name="basic"
        style={{ maxWidth: 250 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="branch">
          <Select 
          placeholder="Branch" 
          options={optionsbranch} 
          onChange={handleBranchChange}
          />
        </Form.Item>

        <Form.Item name="semester">
          <Select
            placeholder="Semester"
            onChange={handleSemChange}
            options={options}
          />
        </Form.Item>

        <Form.Item name="subject">
          <Select 
          placeholder="Subject" 
          options={optionsSubject} 
          />
        </Form.Item>

        <Form.Item name="module">
          <Select
            placeholder="Module"
            options={[
              {
                value: "1",
                label: "Module 1",
              },
              {
                value: "2",
                label: "Module 2",
              },
              {
                value: "3",
                label: "Module 3",
              },
              {
                value: "4",
                label: "Module 4",
              },
              {
                value: "5",
                label: "Module 5",
              },
              {
                value: "6",
                label: "Module 6",
              },
              {
                value: "7",
                label: "Module 7",
              },
              {
                value: "8",
                label: "Module 8",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="pdf"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload maxCount={1}>
            <Button 
            icon={<UploadOutlined />}
            >
              Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button 
          type="primary" 
          htmlType="submit"
          >
            Add module
          </Button>
        </Form.Item>
      </Form>
  )
}

export default UploadForm
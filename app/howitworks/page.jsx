'use client'
import React, { useState } from 'react';
import { Card, Typography, Steps } from 'antd';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const HowItWorks = async() => {
  return (
    <div className="how-it-works-page section">
      <Card className="how-it-works-card" bordered={false}>
        <Title level={2}>How It Works</Title>
        <Paragraph>
          Discovering and contributing to educational resources on Notes App is easy! Follow these simple steps to get started:
        </Paragraph>
        <Steps direction="vertical" size="small" current={0}>
          <Step title="Create an Account" description="Sign up for a Notes App account to access a world of educational content." />
          <Step title="Explore Notes" description="Browse through a variety of notes created by contributors covering various subjects and topics." />
          <Step title="Become a Contributor" description="Share your knowledge by becoming a contributor. Upload your notes to help fellow students." />
          <Step title="Rate and Download" description="Rate and download notes that you find helpful. Contribute to the community by providing feedback." />
        </Steps>
        <Paragraph>
          That's it! Join us on Notes App and become part of a vibrant community dedicated to making education accessible for everyone.
        </Paragraph>
      </Card>
    </div>
  );
};

export default HowItWorks;

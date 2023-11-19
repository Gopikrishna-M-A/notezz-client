'use client'
import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="about-us-page section">
      <Card className="about-us-card" bordered={false}>
        <div className="about-us-content">
          <Title level={2}>About Us</Title>
          <Paragraph>
            Welcome to the Notes App, your hub for free and accessible educational resources.
          </Paragraph>
          <Paragraph>
            Immerse yourself in a world of knowledge where contributors share insights, and students discover valuable materials
            to enrich their learning journey.
          </Paragraph>
          <Paragraph>
            Join us in building a community that celebrates the joy of learning and believes in the power of accessible education.
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import { Button, Card } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-card">
        <Card title="Free Forever Plan" bordered={false}>
          <p className="pricing-description">Because who needs money when you have knowledge?</p>
          <ul className="pricing-features">
            <li>Unlimited access to notes</li>
            <li>Endless learning possibilities</li>
            <li>No hidden fees (seriously!)</li>
          </ul>
          <Button type="primary" icon={<SmileOutlined />} size="large">
            Get Started for Free
          </Button>
        </Card>
      </div>
      <div className="pricing-card">
        <Card title="Premium Plan" bordered={false}>
          <p className="pricing-description">
            Just kidding! There is no premium plan. We're all about free education here.
          </p>
          <ul className="pricing-features">
            <li>Extra happiness (because it's free)</li>
            <li>No credit card required</li>
            <li>Did we mention it's free?</li>
          </ul>
          <Button type="default" size="large">
            Still Free
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;

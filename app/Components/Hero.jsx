import Link from 'next/link';
import { Button } from 'antd';

const Hero = () => {
  return (
    <div className="hero-section section">

    <div className="hero-section-left">
      <div className="hero-title">Connect Share Thrive Together</div>
      <div className="hero-para">We're Your Study Buddy</div>
      <div className="hero-buttons">
        <Link href='/profiles'> <Button type="primary" size="large">Get started</Button></Link>
        <Link href='/howitworks'> <Button  size="large">Learn more</Button></Link>
      </div>
    </div>

    <div className="hero-section-right">
      <div className="hero-img-wrapper">
        <img className="hero-img" src="/images/hero.png" alt="" />
      </div>
    </div>

  </div>
  )
}

export default Hero
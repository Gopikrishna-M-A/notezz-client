import Link from 'next/link';
import TopRatedcard from "./Components/TopRatedcard"
import { Button } from 'antd';

export default function Home() {
  return (
      <>

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

        <div className="top-rated-section section">
          <div className="top-rated-left">
            <div className="top-rated-title">Top-Rated <br /> Note Creators</div>
            <div className="top-rated-para">Discover Their Expertise</div>
          </div>

          <div className="top-rated-right">
            <div className="top-rated-card-wrapper">
                <TopRatedcard  img='girl1' />
                <TopRatedcard  img='boy1' />
                <TopRatedcard  img='girl2' />
                <TopRatedcard  img='boy2' />
            </div>
          </div>

        </div>

      </>
  )
}

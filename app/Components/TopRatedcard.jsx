import React from "react";
import Link from "next/link";

const TopRatedcard = ({ profile }) => {
  return (
    <Link className="link" href={`/profiles/profile/?id=${profile._id}`}>
      <div className="top-rated-card">
        <img src={`/images/${profile.avatar}.png`} className="top-rated-card-img"></img>
        <div className="top-rated-card-title">
          {profile.name.length > 11 ? `${profile.name.slice(0, 10)}...` : profile.name}
        </div>
      </div>
    </Link>
  );
};

export default TopRatedcard;

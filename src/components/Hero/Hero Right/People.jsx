import { useState } from "react";

const People = ({icon, name}) => {

    const [followStatus, setFollowStatus] = useState(true);


    const clicked = () => {
        setFollowStatus(!followStatus);
    }

  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <div className="d-flex align-items-center gap-2">
        <img
          className="rounded-circle"
          alt="Profile"
          src={icon}
          width="36"
          height="36"
        />
        <div className="text-wrapper">{name}</div>
      </div>
      <a className="btn follow rounded-5 bg-slate-200"  onClick={clicked}>
        {followStatus?"Follow":"Unfollow"}
      </a>
    </div>
  );
};

export default People;

import { useState } from "react";
import "./Feature.css";

const Feature = () => {

  const [followStatus, setFollowStatus] = useState(true);

  const clicked = () => {
      setFollowStatus(!followStatus);
  }


  return (
    <div className="container1">
      <div className="hover-buttons">
        <div className="back-btn absolute top-2 left-2">
        <button className="btn btn-primary absolute left-2 top-2" >←</button>     
        </div>
        <button className="btn btn-primary absolute right-2 top-2" onClick={clicked}>
          {followStatus?"Join Group":"Leave Group"}
        </button>
      </div>

        <div className="container1-text">
            <h1 className="text-white text-6xl feature-title">Computer Engineering</h1>
            <p className="text-white mb-5 text-3xl feature-subtitle">142,765 Computer Engineers follow this</p>
        </div>
    </div>
  )
}

export default Feature

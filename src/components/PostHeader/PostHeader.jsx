import { useState } from "react";
import "./PostHeader.css";

const PostHeader = () => {

  const [followStatus, setFollowStatus] = useState(true);

    const clicked = () => {
        setFollowStatus(!followStatus);
    }

  return (
    <div className="container2 my-3">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">All Posts (32)</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Article</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Event</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Job</a>
        </li>
      </ul>

      <div className="dropdown">
        <div className="flex">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Write Post
          </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            <button className="btn btn-primary ms-2 gap-2 d-flex align-items-center" aria-label="Join group" onClick={clicked} >{followStatus?"Join Group":"Leave Group"}</button>
        </div>
      </div>


    </div>
  )
}

export default PostHeader

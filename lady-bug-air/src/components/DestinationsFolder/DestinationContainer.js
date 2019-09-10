import React from "react";
import DestinationCard from "./DestinationCard";

const thumb_beijing = "https://res.cloudinary.com/seijihg/image/upload/v1567972391/lady_bug_air/articles/beijing_ig6ylb.jpg"
const thumb_hcm = "https://res.cloudinary.com/seijihg/image/upload/v1567972390/lady_bug_air/articles/hcm_rr8c8m.jpg"
const thumb_hk = "https://res.cloudinary.com/seijihg/image/upload/v1567972390/lady_bug_air/articles/hk_kbebdb.jpg"

class DestinationContainer extends React.Component {
  render() {
    return (
      <div className="destination_container_top">
        <h3>Recommended Articles</h3>
        <div className="destination_container">
          <DestinationCard thumb={thumb_beijing} />
          <DestinationCard thumb={thumb_hcm} />
          <DestinationCard thumb={thumb_hk} />
        </div>
      </div>
    );
  }
}

export default DestinationContainer;

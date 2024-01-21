import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Education
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience
        </Link>
      </div>
      <div className="mt-5">  
        <Flip top cascade>
          <h1>My Qualifications</h1>
        </Flip>
      </div>
      <br />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle mt-2">
            National Institute of Technology Kurrukshetra
          </h4><br />
          <h4 className="vertical-timeline-element-title">
          BTech in Computer Engineering
          </h4>
          <p>
            CGPA: 9.0297  
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2020 - 2021"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Dayawati Modi Academy 1,  Meerut
          </h4><br />
          <h4 className="vertical-timeline-element-title">
          Class 12th (CBSE)
          </h4>
          <p>
            Secured 96.8% marks 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2018-2019"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Dayawati Modi Academy 1,  Meerut
          </h4>
          <h4 className="vertical-timeline-element-title">
            Class 10th (CBSE)
          </h4>
          <p>
            Secured 96.8% marks 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;

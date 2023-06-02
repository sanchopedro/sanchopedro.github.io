import React from "react";
import { education } from "./../../assets/docs/resume";

function Education() {
  return (
    <div className="education-container">
        <h2 className="title-section uppercase">Education</h2>
      {education.map((educ) => (
        <div className="resume-items">
          <div className="card">
            <div className="card-header">
              <span className="year">{educ.period}</span>
              <span>
                {educ.course} {educ.type} <span className="separator"></span>{" "}
                <span className="institution"> {educ.institution}</span>
              </span>
            </div>
            <div className="card-sub-header">
                <span>({educ.city} - {educ.country})</span>
            </div>
            <div className="card-body">
                <p>{educ.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;

import React from "react";
import { jobExperience } from "../../assets/docs/curriculum";
import { education } from "./../../assets/docs/curriculum";

function Resume() {
  return (
    <div className="resume-container">
      <div className="container">
        <div className="row">
          <div className="job-container">
            <h2 className="title-name uppercase">Job Experience</h2>
            {jobExperience.map((job) => (
              <div className="resume-items">
                <div className="item">
                  <span className="bullet"></span>
                  <div className="card">
                    <div className="card-header">
                      <span className="year">{job.period}</span>
                      <span>
                        {job.title}
                        <span className="separator">
                          <span>{job.jobRole}</span>
                        </span>
                      </span>
                    </div>
                    <div className="sub-header">
                      <span>
                        ({job.city} - {job.country})
                      </span>
                    </div>
                    <div className="card-body">
                      <p>{job.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="education-container">
            <h2 className="title-section uppercase">Education</h2>
            {education.map((educ) => (
              <div className="resume-items">
                <div className="card">
                  <div className="card-header">
                    <span className="year">{educ.period}</span>
                    <span>
                      {educ.course} {educ.type}{" "}
                      <span className="separator"></span>{" "}
                      <span className="institution"> {educ.institution}</span>
                    </span>
                  </div>
                  <div className="card-sub-header">
                    <span>
                      ({educ.city} - {educ.country})
                    </span>
                  </div>
                  <div className="card-body">
                    <p>{educ.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

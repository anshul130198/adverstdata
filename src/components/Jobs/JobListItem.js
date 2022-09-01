import React from "react";
import styles from "./JobListItem.module.scss";
import exportFromJSON from "export-from-json";
import Download from "../../assets/download.png";
import { useNavigate } from "react-router-dom";

const JobListItem = (props) => {
  const { BRANCHE, COMPANY, POSITION, LOCATION, LINK, WZ08, TEXT } = props.job;
  const navigate = useNavigate();
  const downloadJobResults = () => {
    const fileData = {
      data: props.job,
      fileName: "download",
      exportType: exportFromJSON.types.json,
    };
    exportFromJSON(fileData);
  };

  const showJobDetails = () => {
    navigate(`/jobs/${props.job["JOB-ID"]}`);
  }
  return (
    <div className={styles["itemContainer"]}>
      <div className={styles["jobListItem"]}>JOB-ID : {props.job["JOB-ID"]}</div>
      <div className={styles["jobListItem"]}>POSITION : {POSITION}</div>
      <div className={styles["jobListItem"]}>COMPANY : {COMPANY}</div>
      <div className={styles["jobListItem"]}>BRANCHE : {BRANCHE}</div>
      <div className={styles["jobListItem"]}>
        <a href={LINK}>LINK</a>
      </div>
      <div className={styles["jobListItem"]}>LOCATION : {LOCATION}</div>
      <div className={styles["jobListItem"]}>WZ08 : {WZ08}</div>
      <div className={styles["jobListItem"]}>
        Description: <div dangerouslySetInnerHTML={{ __html: TEXT }}></div>
      </div>
      <br />
      <br />
      <div className={styles["jobListItem"]}>
        <button
          className={styles["jobPage"]}
          onClick={() => {
            showJobDetails();
          }}
        >
          View job details
        </button>
      </div>
      <div className={styles["jobListItem"]}>
        <button
          className={styles["downloadButton"]}
          onClick={() => {
            downloadJobResults();
          }}
        >
          download JD <img src={Download} alt=""/>
        </button>
      </div>
    </div>
  );
};

export default JobListItem;

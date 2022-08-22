import React from "react";
import styles from "./JobListItem.module.scss";
import exportFromJSON from "export-from-json";
import Download from "../../assets/download.png";

const JobListItem = (props) => {
  const { BRANCHE, COMPANY, POSITION, LOCATION, LINK, WZ08, TEXT } = props.job;

  const downloadJobResults = () => {
    const fileData = {
      data: props.job,
      fileName: "download",
      exportType: exportFromJSON.types.json,
    };
    exportFromJSON(fileData);
  };

  const renderAdText = () => {
    return <div dangerouslySetInnerHTML={{ __html: TEXT }} />;
  };

  // function Component() {
  //   const htmlString = '...';
  //   return <div dangerouslySetInnerHTML={__html: htmlString} />;
  // }

  return (
    <div className={styles["itemContainer"]}>
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
      <div className={styles["jobListItem"]}>
        <button
          className={styles["downloadButton"]}
          onClick={() => {
            downloadJobResults();
          }}
        >
          download JD <img src={Download} />
        </button>
      </div>
    </div>
  );
};

export default JobListItem;

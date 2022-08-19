import React from "react";
import styles from "./JobListItem.module.scss";

const JobListItem = (props) => {
  // const { id, name, username, email } = props.job;
  const { BRANCHE, COMPANY, POSITION, LOCATION, LINK, WZ08, TEXT } = props.job;
  // console.log("props.item", props.item);
  return (
    <div className={styles["item"]}>
      <div>POSITION : {POSITION}</div>
      <div>COMPANY : {COMPANY}</div>
      <div>BRANCHE : {BRANCHE}</div>
      <div>
        <a href={LINK}>LINK</a>
      </div>
      <div>LOCATION : {LOCATION}</div>
      <div>WZ08 : {WZ08}</div>
      <div>TEXT : {TEXT}</div>
      <br />
      <br />
    </div>
  );
};

export default JobListItem;

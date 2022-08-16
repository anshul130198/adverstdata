import React from "react";

const JobListItem = (props) => {
  const { id, name, username, email } = props.job;
  console.log("props.item", props.item);
  return (
    <div key={id}>
      {name}, {email},{username}
      <br />
      <br />
    </div>
  );
};

export default JobListItem;

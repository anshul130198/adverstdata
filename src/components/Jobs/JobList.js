import React, { useState } from "react";
import Loading from "../../constants/Loading";
import CommonService from "../../services/Common";
import strings from "../../utils/localization/localization";
import to from "../../utils/to";
import JobFilter from "./JobFilter";
// import JobListItem from "./JobListItem";
import styles from './JobList.module.scss'

const Jobs = () => {
  const commonService = new CommonService()
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    const [error, res] = await to(commonService.filterData())
    console.log('res', res)
    if (error) {
      console.log('nope')
      setLoading(false)
    } else {
      setJobs(res)
      setLoading(false)
    }
  }
  return (
    <div>
      {/* <h1>{strings.JOBS}</h1> */}
      {/* <form action="" className={styles["form"]}>
        <input type="text" />
      </form> */}
      {<JobFilter />}
      {loading && <Loading />}
      {/* {
        jobs?.length && !loading
        ? jobs.map((item) => <JobListItem job={item} key={item.id} />)
        : <p>search to get data</p>
      } */}
      <button type="submit" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};

export default Jobs;
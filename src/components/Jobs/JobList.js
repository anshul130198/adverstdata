import React, { useState } from "react";
import Loading from "../../constants/Loading";
import CommonService from "../../services/Common";
import strings from "../../utils/localization/localization";
import to from "../../utils/to";
import JobFilter from "./JobFilter";
import JobListItem from "./JobListItem";
import styles from "./JobList.module.scss";
import exportFromJSON from "export-from-json";
import Download from '../../assets/download.png'
const initialValues = {
  ATS_NAME: "Client Name",
  POSTAL_CODE: "10115",
  SURROUNDING_REGION: "",
  DKZ: "",
  JOB_TITLE: "",
  JOB_POSTING: "",
  EXCLUDE_EMPLOYMENT_AGENCIES: "yes",
  WZ08_CODE: "",
  JOB_CATEGORY_CODE: "",
  LAND: "",
  COMPANY_ID: "",
  COMPANY_NAME: "",
  COMPANY_ID_LIST: "",
  COMPANY_ID_LIST_EXCLUDE: "yes",
  COMPANY_COUNTRY: "D",
  COMPANY_POSTAL_CODE: "",
  ITEM_FROM: "0",
  NUMBER_OF_ITEMS: "1000",
  DATE_FROM: "",
  DATE_TO: "",
  CONTAINS_AD_CONTACT_PERSON_SALUTATION: "",
  CONTAINS_AD_CONTACT_PERSON_FIRSTNAME: "",
  CONTAINS_AD_CONTACT_PERSON_LASTNAME: "",
  CONTAINS_AD_CONTACT_PERSON_EMAIL: "",
  AD_CONTACT_PERSON_EMAIL_CONTAINS_LASTNAME: "",
  CONTAINS_AD_CONTACT_PERSON_TELEPHONE: "",
  CAREER_LEVEL: "",
  COMPANY_EMPLOYEES: "",
  SIRET: "",
  SEMANTIC: "",
  POSITION_ID_LIST: "",
  STATE: "",
  WITHOUT_REAL_TIME_ADVERTS: "",
  JOBS_GROUPED: "",
  SORT_BY: "DATE DESC",
};

const JobList = () => {
  const commonService = new CommonService();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(initialValues);
  const [jobResponse, setJobResponse] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    const [error, res] = await to(
      commonService.filterData({ ...payload, TOKEN: token.TOKEN })
    );
    if (error && !res) {
      console.log("error occured while fetching jobs", error);
      setLoading(false);
    } else {
      const jobs = res[0].EXPORT.RESULT.ITEM;
      setJobResponse(res[0])
      setJobs(jobs);
      setLoading(false);
    }
  };

  const downloadJobResults = () => {
    const fileData = {
      data: jobResponse,
      fileName: "download",
      exportType: exportFromJSON.types.json
    }
    exportFromJSON(fileData)
  }

  return (
    <div className={styles["jobListContainer"]}>
      <h1 className={styles["heading"]}>{strings.JOBS}</h1>
      {<JobFilter payload={payload} setPayload={setPayload} />}
      <button type="submit" onClick={handleSearch}>
        search
      </button>
      {jobResponse?.EXPORT?.ITEMS === 0 && 'No results found'}
      {jobResponse?.EXPORT?.ITEMS?.RESULT}
      {jobResponse?.EXPORT?.ITEMS > 0 && <button onClick={() => { downloadJobResults() }}>
        Download All results
        <img src={Download} alt="" style={{ width: '1.5rem', position: 'relative', top: '5px', left: '1rem' }} />
      </button>}
      {loading && <Loading />}
      {jobs?.length && !loading
        ? jobs.map((item) => <JobListItem job={item} key={item["AD-ID"]} />)
        : ""}
    </div>
  );
};

export default JobList;

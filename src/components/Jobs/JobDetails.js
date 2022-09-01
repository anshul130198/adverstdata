import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonService from "../../services/Common";
import to from "../../utils/to";
import styles from "./JobDetails.module.scss";
const JobDetails = () => {
  let { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState();
  const [loading, setLoading] = useState();
  const [jobListKeys, setJobListKeys] = useState([]);

  // let jobListKeys = [];

  useEffect(() => {
    const commonService = new CommonService();
    const getDetails = async () => {
      setLoading(true);
      const [error, res] = await to(
        commonService.details({
          jobId: jobId,
        })
      );
      if (error && !res) {
        console.log("error occured while fetching jobs", error);
        setLoading(false);
      } else {
        console.log(res.jobDetails);
        setJobListKeys(Object.keys(res.jobDetails))
        console.log(jobListKeys);
        setJobDetails(res.jobDetails);
        setLoading(false);
      }
    };
    getDetails();
  }, []);

  return (
    <div className={styles.itemContainer}>
      <h1>Details</h1>
      {loading && <p>loading...</p>}
      <div>
        {!loading && jobDetails && jobListKeys.length>0 && (
          <div>
            {jobListKeys.map((item, index) => {
              return (
                <div className={styles.jobListItem} key={index}>
                  <div className={styles.jobListKey} key={item._id}>{item} </div>
                  <div className={styles.jobListValue} key={item._id}> {jobDetails[item]}</div>
                </div>
              )
            })}
            {/* <div className={styles.jobListItem}>
              POSITION - {jobDetails["POSITION"]}
            </div>
            <div className={styles["jobListItem"]}>
              COMPANY - {jobDetails.COMPANY}
            </div>
            <div className={styles["jobListItem"]}>
              BRANCHE - {jobDetails.BRANCHE}
            </div>
            <div className={styles["jobListItem"]}>
              <a href={jobDetails.LINK}>LINK</a>
            </div>
            <div className={styles["jobListItem"]}>
              LOCATION - {jobDetails.LOCATION}
            </div>
            <div className={styles["jobListItem"]}>
              WZ08 - {jobDetails.WZ08}
            </div>
            <div className={styles["jobListItem"]}>
              Description-{" "}
              <div dangerouslySetInnerHTML={{ __html: jobDetails.TEXT }}></div>
            </div>
            <br />
            <br />
            <p>
              AD-CONTACT-PERSON-LASTNAME -
              {jobDetails["AD-CONTACT-PERSON-LASTNAME"]}
            </p>
            <p>COMPANY-COUNTRY - {jobDetails["COMPANY-COUNTRY"]}</p>
            <p>
              AD-CONTACT-PERSON-LASTNAME -
              {jobDetails["AD-CONTACT-PERSON-LASTNAME"]}
            </p>
            <p>
              AD-CONTACT-PERSON-LASTNAME -
              {jobDetails["AD-CONTACT-PERSON-LASTNAME"]}
            </p>
            <p>COMPANY-COUNTRY - {jobDetails["COMPANY-COUNTRY"]}</p>
            <p>COMPANY-LATITUDE - {jobDetails["COMPANY-LATITUDE"]}</p>
            <p>COMPANY - {jobDetails["COMPANY"]}</p>
            <p>
              AD-CONTACT-PERSON-TITLE - {jobDetails["AD-CONTACT-PERSON-TITLE"]}
            </p>
            <p>COMPANY-ADDRESS - {jobDetails["COMPANY-ADDRESS"]}</p>
            <p>JOB-CATEGORY - {jobDetails["JOB-CATEGORY"]}</p>
            <p>WZ08 - {jobDetails["WZ08"]}</p>
            <p>AD-CONTACT-PERSON - {jobDetails["AD-CONTACT-PERSON"]}</p>
            <p>COMPANY-POSTAL-CODE - {jobDetails["COMPANY-POSTAL-CODE"]}</p>
            <p>INTERN-LINK-TXT - {jobDetails["INTERN-LINK-TXT"]}</p>
            <p>COMPANY-CITY - {jobDetails["COMPANY-CITY"]}</p>
            <p>COMPANY-INTERNET - {jobDetails["COMPANY-INTERNET"]}</p>
            <p>COMPANY-EMPLOYEES - {jobDetails["COMPANY-EMPLOYEES"]}</p>
            <p>COMPANY-LONGITUDE - {jobDetails["COMPANY-LONGITUDE"]}</p>
            <p>COMPANY-ID - {jobDetails["COMPANY-ID"]}</p>
            <p>
              AD-CONTACT-PERSON-SALUTATION -
              {jobDetails["AD-CONTACT-PERSON-SALUTATION"]}
            </p>
            <p>
              AD-CONTACT-PERSON-EMAIL - {jobDetails["AD-CONTACT-PERSON-EMAIL"]}
            </p>
            <p>JOB-CATEGORY-CODE - {jobDetails["JOB-CATEGORY-CODE"]}</p>
            <p>LOCATION - {jobDetails["LOCATION"]}</p>
            <p>COMPANY-EMAIL - {jobDetails["COMPANY-EMAIL"]}</p>
            <p>POSITION-ID - {jobDetails["POSITION-ID"]}</p>
            <p>COMPANY-SIRET - {jobDetails["COMPANY-SIRET"]}</p>
            <p>JOB-ID - {jobDetails["JOB-ID"]}</p>
            <p>SOURCE-TEXT - {jobDetails["SOURCE-TEXT"]}</p>
            <p>
              AD-CONTACT-PERSON-FUNCTION -
              {jobDetails["AD-CONTACT-PERSON-FUNCTION"]}
            </p>
            <p>
              COMPANY-ADDRESS-NUMBER - {jobDetails["COMPANY-ADDRESS-NUMBER"]}
            </p>
            <p>COMPANY-LINK - {jobDetails["COMPANY-LINK"]}</p>
            <p>
              AD-CONTACT-PERSON-FIRSTNAME -
              {jobDetails["AD-CONTACT-PERSON-FIRSTNAME"]}
            </p>
            <p>INTERN-LINK-PDF - {jobDetails["INTERN-LINK-PDF"]}</p>
            <p>COMPANY-PHONE - {jobDetails["COMPANY-PHONE"]}</p>
            <p>DATE - {jobDetails["DATE"]}</p>
            <p>CAREER-LEVEL - {jobDetails["CAREER-LEVEL"]}</p>
            <p>KLD5 - {jobDetails["KLD5"]}</p>
            <p>CAD-CONTACT-PERSON-PHONE - {jobDetails["CAREER-LEVEL"]}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;

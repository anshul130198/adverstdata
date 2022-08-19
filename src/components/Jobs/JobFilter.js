import React from "react";
import styles from "./JobFilter.module.scss";
import Select from "react-select";
import WZ08_list from "../../constants/WZ08_list";
import Job_category_list from "../../constants/job_category_list";
import DKZ_list from "../../constants/DKZ_list";
import State_List from "../../constants/state_list";

const JobFilter = (props) => {
  const { payload, setPayload } = props;

  const handleInputChange = (e) => {
    console.log(e);
    if (e && e.target) {
      const { name, value } = e.target;
      setPayload({
        ...payload,
        [name]: value,
      });
    } else {
      if (Array.isArray(payload[e[0].name])) {
        const arr = [];
        e.map((item) => {
          arr.push(item.value);
        });
        setPayload({
          ...payload,
          [e[0].name]: arr,
        });
      } else {
        setPayload({
          ...payload,
          [e.name]: e.value,
        });
      }
      console.log("payload", payload);
    }
  };

  const EXCLUDE_EMPLOYMENT_AGENCIES_OPTIONS = [
    { value: "", label: "", name: "EXCLUDE_EMPLOYMENT_AGENCIES" },
    { value: "yes", label: "yes", name: "EXCLUDE_EMPLOYMENT_AGENCIES" },
    { value: "no", label: "no", name: "EXCLUDE_EMPLOYMENT_AGENCIES" },
  ];

  const WZ08_CODE_OPTIONS = WZ08_list.map((item) => {
    item.value = item.wz08;
    item.label = item.wz08;
    item.name = "WZ08_CODE";
    return item;
  });
  // const WZ08_CODE_OPTIONS = [
  //   { value: "", label: "", name: "WZ08_CODE" },
  //   { value: "123", label: "123", name: "WZ08_CODE" },
  //   { value: "321", label: "321", name: "WZ08_CODE" },
  // ];

  const JOB_CATEGORY_CODE_OPTIONS = Job_category_list.map((item) => {
    item.value = item.code;
    item.label = item.code;
    item.name = "JOB_CATEGORY_CODE";
    return item;
  });
  // const JOB_CATEGORY_CODE_OPTIONS = [
  //   { value: "", label: "", name: "JOB_CATEGORY_CODE" },
  //   { value: "c1", label: "c1", name: "JOB_CATEGORY_CODE" },
  //   { value: "c2", label: "c2", name: "JOB_CATEGORY_CODE" },
  // ];

  const DKZ_CODE_OPTIONS = DKZ_list.map((item) => {
    item.value = item.dkz;
    item.label = item.dkz;
    item.name = "DKZ";
    return item;
  });

  const STATE_CODE_OPTIONS = State_List.map((item) => {
    item.value = item.original_state;
    item.label = item.original_state;
    item.name = "STATE_CODE";
    return item;
  });

  const COMPANY_ID_LIST_EXCLUDE_OPTIONS = [
    { value: "", label: "", name: "COMPANY_ID_LIST_EXCLUDE" },
    { value: "yes", label: "yes", name: "COMPANY_ID_LIST_EXCLUDE" },
    { value: "no", label: "no", name: "COMPANY_ID_LIST_EXCLUDE" },
  ];

  const CAREER_LEVEL_OPTIONS = [
    { label: "1", value: "<5", name: "CAREER_LEVEL" },
    { label: "2", value: "<25", name: "CAREER_LEVEL" },
    { label: "3", value: "<50", name: "CAREER_LEVEL" },
    { label: "4", value: ">50", name: "CAREER_LEVEL" },
    { label: "5", value: "<250", name: "CAREER_LEVEL" },
    { label: "6", value: ">250", name: "CAREER_LEVEL" },
    { label: "7", value: "<500", name: "CAREER_LEVEL" },
    { label: "8", value: ">500", name: "CAREER_LEVEL" },
    { label: "9", value: "<1000", name: "CAREER_LEVEL" },
    { label: "10", value: ">1000", name: "CAREER_LEVEL" },
  ];
  const POSITION_ID_LIST_OPTIONS = [
    { value: "Date", label: "Date", name: "POSITION_ID_LIST_OPTIONS" },
    {
      value: "Date Ascending",
      label: "Date Ascending",
      name: "POSITION_ID_LIST_OPTIONS",
    },
    {
      value: "Date Descending",
      label: "Date Descending",
      name: "POSITION_ID_LIST_OPTIONS",
    },
    { value: "Company", label: "Company", name: "POSITION_ID_LIST_OPTIONS" },
    { value: "Position", label: "Position", name: "POSITION_ID_LIST_OPTIONS" },
  ];
  const SORT_BY_OPTIONS = [
    { value: "Date", label: "Date", name: "SORT_BY" },
    { value: "Date Ascending", label: "Date Ascending", name: "SORT_BY" },
    { value: "Date Descending", label: "Date Descending", name: "SORT_BY" },
    { value: "Company", label: "Company", name: "SORT_BY" },
    { value: "Position", label: "Position", name: "SORT_BY" },
  ];
  const booleanOptions = [
    { value: "yes", label: "YES", name: "SORT_BY" },
    { value: "no", label: "NO", name: "SORT_BY" },
  ];
  const SEMANTIC_OPTIONS = [
    { value: "yes", label: "Date", name: "SEMANTIC" },
    { value: "no", label: "Date Ascending", name: "SEMANTIC" },
  ];

  return (
    <div>
      <h1>Filters</h1>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-item"]}>
          ATS Name{" "}
          <input
            className={styles["filterInput"]}
            name="ATS_NAME"
            type="text"
            value={payload.ATS_NAME}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          POSTAL CODE{" "}
          <input
            className={styles["filterInput"]}
            name="POSTAL_CODE"
            type="text"
            value={payload.POSTAL_CODE}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          SURROUNDING REGION{" "}
          <input
            className={styles["filterInput"]}
            name="SURROUNDING_REGION"
            type="number"
            value={payload.SURROUNDING_REGION}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className={styles["grid-item"]}>
          DKZ{" "}
          <input
            className={styles["filterInput"]}
            name="DKZ"
            type="text"
            value={payload.DKZ}
            onChange={handleInputChange}
          />
        </div> */}
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">DKZ CODE</label>
          <Select
            options={DKZ_CODE_OPTIONS}
            onChange={handleInputChange}
            isClearable={true}
          />
        </div>
        <div className={styles["grid-item"]}>
          Job Title{" "}
          <input
            className={styles["filterInput"]}
            name="JOB_TITLE"
            type="text"
            value={payload.JOB_TITLE}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          Job Posting{" "}
          <input
            className={styles["filterInput"]}
            name="JOB_POSTING"
            type="text"
            value={payload.JOB_POSTING}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">EXCLUDE EMPLOYMENT AGENCIES OPTIONS</label>
          <Select
            options={EXCLUDE_EMPLOYMENT_AGENCIES_OPTIONS}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">WZ08 CODE</label>
          <Select
            isMulti={true}
            options={WZ08_CODE_OPTIONS}
            onChange={handleInputChange}
            isClearable={true}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">JOB CATEGORY CODE</label>
          <Select
            options={JOB_CATEGORY_CODE_OPTIONS}
            onChange={handleInputChange}
            isClearable={true}
            isMulti
          />
        </div>
        <div className={styles["grid-item"]}>
          LAND{" "}
          <input
            className={styles["filterInput"]}
            name="LAND"
            type="text"
            value={payload.LAND}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY ID{" "}
          <input
            className={styles["filterInput"]}
            type="text"
            name="COMPANY_ID"
            value={payload.COMPANY_ID}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY NAME{" "}
          <input
            className={styles["filterInput"]}
            type="text"
            name="COMPANY_NAME"
            value={payload.COMPANY_NAME}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY ID LIST{" "}
          <input
            className={styles["filterInput"]}
            type="text"
            name="COMPANY_ID_LIST"
            onChange={handleInputChange}
            // options={}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">COMPANY ID LIST EXCLUDE</label>
          <Select
            options={COMPANY_ID_LIST_EXCLUDE_OPTIONS}
            value={payload.COMPANY_ID_LIST_EXCLUDE}
            onChange={handleInputChange}
            isClearable={true}
          />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY COUNTRY{" "}
          <input
            className={styles["filterInput"]}
            type="text"
            name="COMPANY_COUNTRY"
            value={payload.COMPANY_COUNTRY}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY POSTAL CODE{" "}
          <input
            className={styles["filterInput"]}
            type="number"
            name="COMPANY_POSTAL_CODE"
            value={payload.COMPANY_POSTAL_CODE}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          ITEM FROM{" "}
          <input
            className={styles["filterInput"]}
            type="number"
            max="1000"
            name="ITEM_FROM"
            value={payload.ITEM_FROM}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          NUMBER OF ITEMS{" "}
          <input
            className={styles["filterInput"]}
            type="number"
            max="1000"
            name="NUMBER_OF_ITEMS"
            value={payload.NUMBER_OF_ITEMS}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          DATE FROM{" "}
          <input
            className={styles["filterInput"]}
            type="date"
            name="DATE_FROM"
            value={payload.DATE_FROM}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          DATE TO{" "}
          <input
            className={styles["filterInput"]}
            type="date"
            name="DATE_TO"
            value={payload.DATE_TO}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          CONTAINS AD CONTACT PERSON SALUTATION{" "}
          <input
            className={styles["filterInput"]}
            type="text"
            name="CONTAINS_AD_CONTACT_PERSON_SALUTATION"
            value={payload.CONTAINS_AD_CONTACT_PERSON_SALUTATION}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          CONTAINS AD CONTACT PERSON FIRSTNAME
          <input
            className={styles["filterInput"]}
            type="text"
            name="CONTAINS_AD_CONTACT_PERSON_FIRSTNAME"
            value={payload.CONTAINS_AD_CONTACT_PERSON_FIRSTNAME}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          CONTAINS AD CONTACT PERSON LASTNAME
          <input
            className={styles["filterInput"]}
            type="text"
            name="CONTAINS_AD_CONTACT_PERSON_LASTNAME"
            value={payload.CONTAINS_AD_CONTACT_PERSON_LASTNAME}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          CONTAINS AD CONTACT PERSON EMAIL
          <input
            className={styles["filterInput"]}
            type="text"
            name="CONTAINS_AD_CONTACT_PERSON_LASTNAME"
            _value={payload.CONTAINS_AD_CONTACT_PERSON_EMAIL}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          AD CONTACT PERSON EMAIL CONTAINS LASTNAME
          <input
            className={styles["filterInput"]}
            type="text"
            name="AD_CONTACT_PERSON_EMAIL_CONTAINS_LASTNAME"
            value={payload.AD_CONTACT_PERSON_EMAIL_CONTAINS_LASTNAME}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          CONTAINS AD CONTACT PERSON TELEPHONE
          <input
            className={styles["filterInput"]}
            type="text"
            name="CONTAINS_AD_CONTACT_PERSON_TELEPHONE"
            value={payload.CONTAINS_AD_CONTACT_PERSON_TELEPHONE}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="">CAREER LEVEL </label>
          <Select
            options={CAREER_LEVEL_OPTIONS}
            onChange={handleInputChange}
            isClearable={true}
          />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY EMPLOYEES{" "}
          <input
            className={styles["filterInput"]}
            name="COMPANY_EMPLOYEES"
            type="text"
            value={payload.COMPANY_EMPLOYEES}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          SIRET{" "}
          <input
            className={styles["filterInput"]}
            name="SIRET"
            type="text"
            value={payload.SIRET}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">SEMANTIC</label>
          <Select
            options={SEMANTIC_OPTIONS}
            inputValue={payload.SEMANTIC}
            onInputChange={handleInputChange}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">POSITION ID LIST </label>
          <Select
            options={POSITION_ID_LIST_OPTIONS}
            value={payload.POSITION_ID_LIST}
            onChange={handleInputChange}
            isClearable={true}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="SORT_BY">SORT BY</label>
          <Select
            options={SORT_BY_OPTIONS}
            name="SORT_BY"
            onChange={handleInputChange}
            isClearable={true}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="STATE">STATE</label>
          <Select
            options={STATE_CODE_OPTIONS}
            name="STATE_CODE"
            onChange={handleInputChange}
            value={payload.STATE_CODE}
          />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">WITHOUT REAL TIME ADVERTS </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">JOBS GROUPED </label>
          <Select options={booleanOptions} />
        </div>
      </div>
    </div>
  );
};
export default JobFilter;

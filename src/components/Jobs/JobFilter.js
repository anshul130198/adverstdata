import React, { useState } from "react";
import styles from "./JobFilter.module.scss";
import Select from 'react-select'
// import { colourOptions } from '../data';

const initialValues = {
  ATS_NAME: "CLIENT_NAME",
  POSTAL_CODE: "",
  SURROUNDING_REGION: "",
  DKZ: "",
  JOB_TITLE: "",
  JOB_POSTING: "",
  EXCLUDE_EMPLOYMENT_AGENCIES: "",
  WZ08_CODE: "",
  JOB_CATEGORY_CODE: "",
  LAND: "D",
  COMPANY_ID: "",
  COMPANY_NAME: "",
  COMPANY_ID_LIST: "",
  COMPANY_ID_LIST_EXCLUDE: "",
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
  SORT_BY: "",
  STATE: "",
  WITHOUT_REAL_TIME_ADVERTS: "",
  JOBS_GROUPED: "",
  SORT_BY: "",
  SORT_BY: "",
};

const JobFilter = () => {
  const [payload, setPayload] = useState(initialValues);
  console.log('data', payload)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  //  to be deleted
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const booleanOptions = [
    { value: '', label: '' },
    { value: 'yes', label: 'yes' },
  ]

  const sortOptions = [
    { value: 'Date', label: 'Date' },
    { value: 'Date Ascending', label: 'Date Ascending' },
    { value: 'Date Descending', label: 'Date Descending' },
    { value: 'Company', label: 'Company' },
    { value: 'Position', label: 'Position' },
  ]

  return (
    <div>
      <h1>Filters</h1>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-item"]}>
          ATS Name <input className={styles["filterInput"]} name="ATS_NAME" type="text" value={payload.ATS_NAME} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          POSTAL CODE <input className={styles["filterInput"]} name="POSTAL_CODE" type="text" value={payload.POSTAL_CODE} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          SURROUNDING REGION  <input className={styles["filterInput"]} name="SURROUNDING_REGION" type="number" value={payload.SURROUNDING_REGION} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          DKZ <input className={styles["filterInput"]} name="DKZ" type="text" value={payload.DKZ} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          Job Title <input className={styles["filterInput"]} name="JOB_TITLE" type="text" value={payload.JOB_TITLE} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          Job Posting <input className={styles["filterInput"]} name="JOB_POSTING" type="text" value={payload.JOB_POSTING} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          EXCLUDE EMPLOYMENT AGENCIES
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">Select Company </label>
          <Select
            defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className={styles["grid-item"]}>
          WZ08 CODE <input className={styles["filterInput"]} name="WZ08_CODE" type="text" value={payload.WZ08_CODE} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          JOB CATEGORY CODE <input className={styles["filterInput"]} name="LAND" value={payload.LAND} type="text" onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          LAND <input className={styles["filterInput"]} name="name" type="text" value={payload.LAND} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY ID <input className={styles["filterInput"]} type="text" name="COMPANY_ID" value={payload.COMPANY_ID} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY NAME <input className={styles["filterInput"]} type="text" name="COMPANY_NAME" value={payload.COMPANY_NAME} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY ID LIST <input className={styles["filterInput"]} type="text" name="COMPANY_ID_LIST" value={payload.COMPANY_ID_LIST} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY ID LIST EXCLUDE <input className={styles["filterInput"]} type="text" name="COMPANY_ID_LIST_EXCLUDE" value={payload.COMPANY_ID_LIST_EXCLUDE} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY COUNTRY <input className={styles["filterInput"]} type="text" name="COMPANY_COUNTRY" value={payload.COMPANY_COUNTRY} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY POSTAL CODE <input className={styles["filterInput"]} type="number" name="COMPANY_POSTAL_CODE" value={payload.COMPANY_POSTAL_CODE} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          ITEM FROM <input className={styles["filterInput"]} type="number" max="1000" name="ITEM_FROM" value={payload.ITEM_FROM} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          NUMBER OF ITEMS <input className={styles["filterInput"]} type="number" max="1000" name="NUMBER_OF_ITEMS" value={payload.NUMBER_OF_ITEMS} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          DATE FROM <input className={styles["filterInput"]} type="date" name="DATE_FROM" value={payload.DATE_FROM} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          DATE TO <input className={styles["filterInput"]} type="date" name="DATE_TO" value={payload.DATE_TO} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON SALUTATION </label>
          <Select options={payload.CONTAINS_AD_CONTACT_PERSON_SALUTATION} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON FIRSTNAME </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON LASTNAME </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON EMAIL </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">AD CONTACT PERSON EMAIL CONTAINS LASTNAME </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON TELEPHONE </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          CAREER LEVEL <input className={styles["filterInput"]} name="CAREER_LEVEL" type="text" value={payload.CAREER_LEVEL} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY EMPLOYEES <input className={styles["filterInput"]} name="COMPANY_EMPLOYEES" type="text" value={payload.COMPANY_EMPLOYEES} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          SIRET <input className={styles["filterInput"]} name="SIRET" type="text" value={payload.SIRET} onChange={handleInputChange} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">SEMANTIC </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">POSITION ID LIST </label>
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="sortBy">Sort </label>
          <Select options={sortOptions} />
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
  )
};

export default JobFilter;
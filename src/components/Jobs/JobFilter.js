import React, { useState } from "react";
import styles from "./JobFilter.module.scss";
import Select from 'react-select'
// import { colourOptions } from '../data';

const initialValues = {
  company: "",
  position: "",
  link: "",
  date: "",
  note: "",
};

const JobFilter = () => {
  const [payload, setPayload] = useState(initialValues);

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
          ATS Name <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          POSTAL CODE <input className={styles["filterInput"]} type="text" value="" />
        </div>
        <div className={styles["grid-item"]}>
          SURROUNDING REGION  <input className={styles["filterInput"]} type="number" value="" />
        </div>
        <div className={styles["grid-item"]}>
          DKZ <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          Job Title <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          Job Posting <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          EXCLUDE EMPLOYMENT AGENCIES 
          {/* <label htmlFor="cars">Select Company </label>
          <select name="cars" id="cars">
            <option value="Yes">yes</option>
            <option value="No">no</option>
          </select> */}
            <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">Select Company </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select> */}
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
          WZ08 CODE <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          JOB CATEGORY CODE <input className={styles["filterInput"]} type="text" />
        </div>
        <div className={styles["grid-item"]}>
          LAND <input className={styles["filterInput"]} type="text" value="D" />
        </div>
        {/* <div className={styles["grid-item"]}>
          COMPANY ID <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div> */}
        <div className={styles["grid-item"]}>
          COMPANY NAME <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY ID LIST <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY ID LIST EXCLUDE <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY COUNTRY <input className={styles["filterInput"]} type="text" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          COMPANY POSTAL CODE <input className={styles["filterInput"]} type="number" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
        NUMBER OF ITEMS <input className={styles["filterInput"]} type="number" max="1000" value="1000" />
        </div>
        <div className={styles["grid-item"]}>
        DATE FROM <input className={styles["filterInput"]} type="date" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
        DATE TO <input className={styles["filterInput"]} type="date" value="Client Name" />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON SALUTATION </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON FIRSTNAME </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON LASTNAME </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
            <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON EMAIL </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">AD CONTACT PERSON EMAIL CONTAINS LASTNAME </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">CONTAINS AD CONTACT PERSON TELEPHONE </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}            
          <Select options={booleanOptions} />
        </div>
          <div className={styles["grid-item"]}>
          CAREER LEVEL <input className={styles["filterInput"]} type="text" value="D" />
          </div>
          <div className={styles["grid-item"]}>
          COMPANY EMPLOYEES <input className={styles["filterInput"]} type="text" value="D" />
          </div>
          <div className={styles["grid-item"]}>
          SIRET <input className={styles["filterInput"]} type="text" value="D" />
          </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">SEMANTIC </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">POSITION ID LIST </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="sortBy">Sort </label>
          {/* <select name="sortBy" id="sortBy">
            <option value="Date">Date</option>
            <option value="ASC">Date ASC</option>
            <option value="DESC">Date DESC</option>
            <option value="POSITION">Position</option>
            <option value="COMPANY">Company</option>
          </select> */}
          <Select options={sortOptions}/>
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">WITHOUT REAL TIME ADVERTS </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
        <div className={styles["grid-item"]}>
          <label htmlFor="cars">JOBS GROUPED </label>
          {/* <select name="cars" id="cars">
            <option value="volvo">Yes</option>
          </select> */}
          <Select options={booleanOptions} />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;

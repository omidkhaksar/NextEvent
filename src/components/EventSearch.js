import React,{useRef} from "react";
import Button from "../components/button";
import classes from "../../styles/events-search.module.css";
const EventSearch = (props) => {
    const YearInputRef = useRef();
    const MounthInputRef = useRef();
  function submitHandler(event) {
      event.preventDefault();
      const selectedYear = YearInputRef.current.value;
      const selectedMounth = MounthInputRef.current.value;
      props.onSearch(selectedYear,selectedMounth);

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={YearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={MounthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
};

export default EventSearch;

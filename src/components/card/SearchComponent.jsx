import React from "react";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9">
          <div className="input-group m-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search Doctor"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center">
          <Link to="/book">
            <button className="btn btn-primary" type="button">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

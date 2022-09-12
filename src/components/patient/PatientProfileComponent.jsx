import React from "react";

const PatientProfileComponent = () => {
  
  
  return (
    <div className="p-3 py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="text-right">Edit Profile</h6>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="User_name" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Age" />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Height" />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="New password"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Weight" />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Confrim password"
          />
        </div>
      </div>
      <div className="mt-4 text-right">
        <button className="btn btn-primary text-center" type="button">
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default PatientProfileComponent;

import React from "react";

const RecommendedDoctorComponent = ({ doctorName, specialization, id }) => {
  return (
    <div className="d-inline-flex">
      <div className="card d-flex bg-light p-3 m-2 border">
        <img
          src="https://irp-cdn.multiscreensite.com/d8037e1a/dms3rep/multi/Functional+Medicine+Doctor+Chicago.jpeg"
          width={200}
          height={150}
        />
        <div className="d-flex justify-content-center flex-column">
          <p className="fs-5 pt-2 mb-0 text-center">{doctorName}</p>
          <p className="fs-6 p-0 m-0 text-center">
            Specialization{" "}
            <span className="fs-6 fs-semibold">{specialization}</span>
          </p>
          <button className="btn btn-success btn-sm text-center mt-2 align-self-center px-4">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedDoctorComponent;

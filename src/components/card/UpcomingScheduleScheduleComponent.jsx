import React from "react";
import api from "../../api/api";

const UpcomingScheduleComponent = ({
  isDoctor,
  id,
  doctorName,
  specialization,
  date,
  deleteAPI,
}) => {
  return (
    <div className="d-inline-flex">
      <div
        className={`card d-flex bg-light m-2 border ${
          isDoctor ? `p-5` : `p-3`
        }`}
      >
        <div className="d-flex justify-content-center flex-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-clock align-self-center mb-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <p className="fs-5 mb-0 text-center">{doctorName}</p>
          <p className="fs-6 p-0 m-0 text-center">
            {/* Specialization{" "} */}
            <span className="fs-6 fs-semibold">{specialization}</span>
          </p>
          <p className="fs-6 p-0 m-0 text-center">Date: {date}</p>
          {!isDoctor ? (
            <button
              className="btn btn-danger btn-sm text-center mt-2 align-self-center px-4"
              onClick={(e) => deleteAPI(e, id)}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UpcomingScheduleComponent;

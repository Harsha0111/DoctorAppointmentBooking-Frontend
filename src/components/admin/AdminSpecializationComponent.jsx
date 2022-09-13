import React, { useContext } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import api from "../../api/api";
import { useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const INITIAL_VALUE = { specialization: "", id: 0 };

const AdminSpecializationComponent = ({ open, setOpen }) => {
  const [specialization, setSpecialization] = useState(INITIAL_VALUE);
  const [specializationError, setSpecializationError] = useState({
    specialization: "",
  });

  const { specializationContext, setSpecializationContext } =
    useContext(UserContext);

  useEffect(() => {
    // console.log(specialization);
  }, []);

  useEffect(() => {
    api.get("/specialization/all").then(
      (response) => {
        // console.log(response);
        let data = response.data;
        if (data.data) {
          // console.log(data.data);
          setSpecializationContext(data.data);
          setSpecialization(data.data);
        } else {
          console.log(data.error.message);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const specializationApi = (event) => {
    event.preventDefault();
    console.log(specialization);
    if (specialization.id === 0)
      api.post("/specialization", specialization).then(
        (response) => {
          console.log(response);
          let data = response.data;
          if (data.data) {
            console.log(data.data);
            setSpecializationContext(data.data);
            setSpecialization(INITIAL_VALUE);
          } else {
            console.log(data.error.message);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    else
      api.put("/specialization", specialization).then(
        (response) => {
          console.log(response);
          let data = response.data;
          if (data.data) {
            console.log(data.data);
            setSpecializationContext(data.data);
            setSpecialization(INITIAL_VALUE);
          } else {
            console.log(data.error.message);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const deleteSplAPI = (event, id) => {
    event.preventDefault();
    api.delete(`/specialization/${id}`, specialization).then(
      (response) => {
        console.log(response);
        let data = response.data;
        if (data.data) {
          console.log(data.data);
          setSpecializationContext(data.data);
          setSpecialization(data.data);
        } else {
          console.log(data.error.message);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const edit = (e, spl) => {
    setSpecialization({ specialization: spl.specialization, id: spl.id });
  };

  return (
    <div className="card border p-3 mt-5">
      <div className="fs-4">Specialization</div>
      <InputGroup className="mt-3">
        <Form.Control
          placeholder="Enter specialization"
          value={specialization.specialization}
          onChange={(event) => {
            let spl = event.target.value;
            if (spl.length > 2) {
              console.log(specialization);
              setSpecializationError({ specialization: "" });
            } else {
              setSpecializationError({
                specialization: "Enter atleast 2 characters",
              });
            }
            if (spl.length === 0 && specialization.id !== 0)
              setSpecialization(INITIAL_VALUE);
            else
              setSpecialization({ specialization: spl, id: specialization.id });
          }}
        />
        <Button
          variant="primary"
          id="button-addon2"
          onClick={(e) => {
            specializationApi(e);
          }}
        >
          {specialization.id === 0 ? "Add" : "Edit"}
        </Button>
      </InputGroup>
      <Form.Text className="text-danger">
        {specializationError.specialization}
      </Form.Text>

      <div>
        <div className="fs-4 my-3">All Specializations</div>
        <Table striped bordered hover className="my-2">
          <thead>
            <tr>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {specializationContext.length > 0 ? (
              <>
                {specializationContext.map((spl) => (
                  <tr key={spl.id}>
                    <td>{spl.specialization}</td>
                    <td>
                      <span
                        className="btn btn-primary btn-sm me-2"
                        onClick={(e) => edit(e, spl)}
                      >
                        Edit
                      </span>
                      <span
                        className="btn btn-danger btn-sm me-2"
                        onClick={(e) => deleteSplAPI(e, spl.id)}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <p>No items to show</p>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminSpecializationComponent;

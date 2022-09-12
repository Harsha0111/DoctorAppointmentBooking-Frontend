import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import AdminDoctorComponent from "../components/admin/AdminDoctorComponent";
import AdminSpecializationComponent from "../components/admin/AdminSpecializationComponent";
import AdminViewAllDoctorsComponent from "../components/admin/AdminViewAllDoctorsComponent";
import AppBarComponent from "../components/common/AppBarComponent";

const AdminPage = () => {
  return (
    <>
      <AppBarComponent />
      <Container>
        <Row>
          <Col>
            <AdminDoctorComponent />
          </Col>

          <Col>
            <AdminSpecializationComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <AdminViewAllDoctorsComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPage;

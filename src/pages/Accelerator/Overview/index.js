import React from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"

const OverViewCont = () => {
  document.title = "AMS Dashboard | Accelerator "
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb
            maintitle="Dashboard"
            title="Accelerator"
            breadcrumbItem="Overview"
          />
          <Row>
            <Col xs="12">
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default OverViewCont

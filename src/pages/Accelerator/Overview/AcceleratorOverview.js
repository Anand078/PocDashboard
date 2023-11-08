import React from "react"
import { CardBody, Card, Container, Row, Col, CardTitle } from "reactstrap"
import Doughnut from "pages/AllCharts/echart/doughnutchart"
import Pie from "pages/AllCharts/echart/piechart"
import BarChart from "pages/AllCharts/chartjs/barchart"

function AccountOverview() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title mb-4">Accounts Overview</h4>
                <div id="doughnut-chart" className="e-chart">
                  <Doughnut />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title mb-4">Accounts Overview</h4>
                <div id="pie-chart" className="e-chart">
                  <Pie />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="h4 mb-4">Technology Overview</CardTitle>
                <Row className="justify-content-center">
                </Row>
                <BarChart />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AccountOverview

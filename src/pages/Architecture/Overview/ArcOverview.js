import React, { useState, useEffect } from "react"
import {
  CardBody,
  Card,
  Container,
  Row,
  Col,
  CardTitle,
  Button,
  Spinner,
} from "reactstrap"
import ArcModal from "./Components/ArcModal"
import Doughnut from "./Components/doughnut"
import Pie from "./Components/piechart"
import BarChart from "pages/AllCharts/chartjs/barchart"
import Modal from "./Components/ArcModal"
import { useDispatch } from "react-redux"
import { MDBDataTable } from "mdbreact"
import DeleteConfirmationModal from "./Components/DeleteArc"

function AccountOverview() {
  const dispatch = useDispatch()
  const [modalCenter, setModalCenter] = useState(false)
  const toggleCenter = () => setModalCenter(!modalCenter)
  const [arbData, setArbData] = useState([])
  const [editRowData, setEditRowData] = useState(null)
  const [deleteRowData, setDeleteRowData] = useState(null)
  const [arbstatusData, setarbstatusData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [dataUpdated, setDataUpdated] = useState(false)

  const openDeleteModal = rowData => {
    setIsDeleteModalOpen(true)
    setDeleteRowData(rowData)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(
        "http://52.91.176.22:8080/arb/" + deleteRowData.id,
        {
          method: "DELETE",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        }
      )
      const result = await response.json()
      if (result.success === true) {
        console.log("delete operation successful")
      } else {
        console.log("delete operation unsuccessful")
      }
    } catch (error) {
      console.error("Error fetching arb data:", error)
    }
    closeDeleteModal()
  }

  const getArbData = async () => {
    try {
      const resp = await fetch("http://52.91.176.22:8080/arb")
      const data = await resp.json()
      setArbData(data.data)
    } catch (error) {
      console.error("Error fetching arb data:", error)
    }
  }

  const getstatusData = async () => {
    try {
      const resp = await fetch("http://52.91.176.22:8080/arbstatus")
      const data = await resp.json()
      setarbstatusData(data.data)
    } catch (error) {
      console.error("Error fetching other data:", error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getArbData()
        await getstatusData()
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  function getPieChartData() {
    const joinedData = arbData?.map(tableItem => {
      const statusItem = arbstatusData.find(
        statusItem => statusItem.id === tableItem.statusid
      )
      return {
        id: tableItem.statusid,
        status: statusItem ? statusItem.status : "",
      }
    })

    const statusCounts = joinedData.reduce((counts, item) => {
      const { status } = item
      counts[status] = (counts[status] || 0) + 1
      return counts
    }, {})

    const statusCountArray = Object.entries(statusCounts).map(
      ([status, count], index) => ({
        status,
        count,
      })
    )

    return statusCountArray
  }
  const pieChartData = getPieChartData()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = rowData => {
    setEditRowData(rowData)
    setIsModalOpen(!isModalOpen)
  }

  const getEditCell = rowData => (
    <i
      className="mdi mdi-book-edit-outline"
      style={{ fontSize: "1.5rem", cursor: "pointer" }}
      onClick={() => toggleModal(rowData)}
    ></i>
  )

  const getDeleteCell = rowData => (
    <i
      className="mdi mdi-delete"
      style={{ fontSize: "1.5rem", cursor: "pointer" }}
      onClick={() => openDeleteModal(rowData)}
    ></i>
  )

  const newTableData = arbData?.map(item => ({
    ...item,
    edit: getEditCell(item),
    delete: getDeleteCell(item),
  }))
  const data = {
    columns: [
      {
        label: "Project Name",
        field: "projectname",
        sort: "asc",
        width: 100,
      },
      {
        label: "Project Owner",
        field: "projectowner",
        sort: "asc",
        width: 270,
      },
      {
        label: "Reviewer",
        field: "reviewer",
        sort: "asc",
        width: 200,
      },
      {
        label: "Auditor",
        field: "auditor",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start Date",
        field: "startdate",
        sort: "asc",
        width: 150,
      },
      {
        label: "End Date",
        field: "enddate",
        sort: "asc",
        width: 100,
      },
      {
        label: "Project Score",
        field: "projectscore",
        sort: "asc",
        width: 100,
      },
      {
        label: "",
        field: "edit",
        sort: "asc",
        width: 20,
      },
      {
        label: "",
        field: "delete",
        sort: "asc",
        width: 20,
      },
    ],
    rows: newTableData,
  }
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner type="grow" className="ms-2" color="success" />
          <Spinner type="grow" className="ms-2" color="danger" />
          <Spinner type="grow" className="ms-2" color="warning" />
          <Spinner type="grow" className="ms-2" color="info" />
        </div>
      ) : (
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Status Overview</h4>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut piedata={pieChartData} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Status Overview</h4>
                  <div id="pie-chart" className="e-chart">
                    <Pie piedata={pieChartData} />
                  </div>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Technology Overview</CardTitle>
                  <Row className="justify-content-center"></Row>
                  <BarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">
                    Architecture Review List
                  </CardTitle>
                  <Row style={{ paddingBottom: "1rem" }}>
                    <Col lg={12} className="text-right">
                      <Button
                        color="primary"
                        className="btn btn-primary btn-sm"
                        style={{ fontSize: "1rem" }}
                        onClick={toggleCenter}
                      >
                        New
                        <i
                          className="typcn typcn-chevron-right"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </Button>
                    </Col>
                    <Modal isOpen={modalCenter} toggle={toggleCenter} />
                  </Row>
                  <Row className="justify-content-center"></Row>
                  <MDBDataTable responsive striped bordered hover data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      <ArcModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        editRowData={editRowData}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />
    </>
  )
}

export default AccountOverview

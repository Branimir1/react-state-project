import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';


function MyFooter() {
  return (
    <Container id="contact-section">
      <Row xs={1} sm={1} md={3}>
        <Col className="my-3"> <i className="bi bi-geo-alt" style={{ fontSize: '24px', color:'#495057'}}></i><br/>
          <span className="fw-bold">LOCATION </span> <br/><span> Random ulica<br/> 10000 Zagreb, HR</span>
        </Col>
        <Col className="my-3">  <i className="bi bi-telephone" style={{ fontSize: '24px', color:'#495057'}}></i><br/>
          <span className="fw-bold">CONTACT </span> <br/><span> +385112233</span>
        </Col>
        <Col className="my-3"> <i className="bi bi-clock" style={{ fontSize: '24px', color:'#495057'}}></i><br/>
          <span className="fw-bold">WORKING HOURS </span> <br/><span> Mon: CLOSED<br/>Tue-Sun: 10-24</span>
        </Col>
      </Row>
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2 border-top">
        <span className="">© 2023 Company, Inc</span>
        <div className="nav col-md-4 justify-content-end list-unstyled d-flex"><i className="bi bi-github"></i></div>
      </div>
    </Container>
  )
}

export default MyFooter
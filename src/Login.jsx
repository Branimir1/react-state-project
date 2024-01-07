import React from 'react'
import { Form, Button, Container, Row, Col} from 'react-bootstrap';


export function Login() {
    return (
        <div className="d-flex align-items-center py-3 bg-secondary">
                     {/* <div className='d-flex align-items-start p-3 bg-body-secondary'>
                <Button variant="info">Back</Button>
            </div> */}
      <Container>
        <Row className="justify-content-start mb-3">
          <Col xs="auto">
            <div className="dropdown position-fixed top-0 start-0 py-4 px-4">
             
              <Button variant="primary" className='text-light'>
                 Home
              </Button>
            </div>
          </Col>
        </Row>

        {/* Main content */}
        <Row className="justify-content-start mt-4">
          <Col md="6">
            <main className="justify-content-start">
              <Form>
                <h1 className="h3 mb-3 fw-normal text-light">Please sign in</h1>

                <Form.Floating className="mb-3">
                  <Form.Control type="email" id="floatingInput" placeholder="Email"
                   className='bg-secondary'/>
                  <label htmlFor="floatingInput" className='text-light'>Email address</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control type="password" id="floatingPassword" placeholder="Password" 
                  className='bg-secondary'/>
                  <label htmlFor="floatingPassword" className='text-light'>Password</label>
                </Form.Floating>

                <Form.Check className="text-start my-3">
                  <Form.Check.Input type="checkbox" id="flexCheckDefault" />
                  <Form.Check.Label htmlFor="flexCheckDefault">Remember me</Form.Check.Label>
                </Form.Check>

                <Button variant="primary" type="submit" className="w-100 py-2">
                  Sign in
                </Button>

                <p className="mt-5 mb-1 text-body-secondary">© 2024</p>
              </Form>
            </main>
          </Col>
        </Row>
      </Container>
    </div>


        // <>
        //     <div className='d-flex align-items-center py-4 bg-body-secondary'>
        //         <Form className='form-signin w-100 m-auto'>
        //             <Form.Group controlId="formBasicEmail">
        //             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        //                 <Form.Control type="email" placeholder="Email address" 
        //                 className="form-control bg-dark text-light" />
        //             </Form.Group>

        //             <Form.Group controlId="formBasicPassword">
        //                 <Form.Control type="password" placeholder="Password" 
        //                 className="form-control bg-dark text-light" />
        //             </Form.Group>
        //             <Form.Group controlId="formBasicCheckbox">
        //             </Form.Group>
        //             <Button variant="info" type="submit" className='my-3'>
        //                 Submit
        //             </Button>
        //         </Form>
              
        //     </div>
        // </>

    )
}



import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

export function Home() {
  return (
    <div>
      <Navbar expand="lg" className="pt-3em">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/docs">Docs</Nav.Link>
            <Nav.Link href="/docs">Elementary</Nav.Link>
            {/* <Nav.Link href="#link">Download</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <img class="logo" src="e3.svg" width="200px" />
      <h2 class="title">Element 3D</h2>

    </div>
  );
}


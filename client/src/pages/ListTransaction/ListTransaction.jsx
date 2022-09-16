import { Container, Dropdown } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import NavbarAdmin from '../components/NavbarAdmin';

function ListTransaction() {
  return (
    <div style={{marginTop: '100px'}}>
        {/* <NavbarAdmin/> */}
    <Container>
        <p className='h5 text-light fw-bold mb-4' style={{marginTop: '50px'}}>
            Incoming Transaction
        </p><br/>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr style={{color: 'red'}}>
          <th>No</th>
          <th>Users</th>
          <th>Bukti Transfer</th>
          <th>Remaining Active</th>
          <th>Status User</th>
          <th>Status Payment</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'green'}}>Active</td>
            <td style={{color: 'green'}}>Approve</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'green'}}>Active</td>
            <td style={{color: 'green'}}>Approve</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'green'}}>Active</td>
            <td style={{color: 'green'}}>Approve</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'green'}}>Active</td>
            <td style={{color: 'green'}}>Approve</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'red'}}>Not Active</td>
            <td style={{color: 'orange'}}>Pending</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td>6</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'red'}}>Not Active</td>
            <td style={{color: 'red'}}>Cancel</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td>7</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'green'}}>Active</td>
            <td style={{color: 'green'}}>Approve</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        <tr>
            <td>8</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>26/Hari</td>
            <td style={{color: 'green'}}>Active</td>
            <td style={{color: 'green'}}>Approve</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor: 'black'}}>
                        <Dropdown.Item style={{color: 'green'}} href="#/action-1">Approved</Dropdown.Item>
                        <Dropdown.Item style={{color: 'red'}} href="#/action-2">Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </div>
  );
}

export default ListTransaction;
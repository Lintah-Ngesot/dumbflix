import React from 'react'
import { Container, Row, Col, Button, Card, Dropdown} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import {images} from '../../contstans';

function ListFilm () {
  return (
    <div style={{marginTop: '100px'}}>
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <h3 style={{color: 'white', marginTop: '10px'}}>
              List Film
            </h3>
          </Col>
          <Col style={{marginLeft: '-750px', marginTop: '15px', color: 'white'}}>
            <Row>
              <Col>
                <p>
                Category 
                </p>
              </Col>
              <Col>
              <Dropdown style={{marginLeft: '-310px'}}>
                <Dropdown.Toggle style={{border: '0px solid'}} variant="black" id="dropdown-basic">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Horor</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col  xs={6} md={4}>
            <Button variant='danger' style={{marginLeft: '330px', marginTop: '10px'}}>
              <Link className='text-white text-decoration-none' to={'/add-film'}>Add Film</Link>
            </Button>
          </Col>
        </Row>
        <h5 style={{color: 'white', marginTop: '20px'}}>
          TV Series
        </h5>
        <Row xs={1} md={6} className="g-4">
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  <Link className='text-white text-decoration-none' to={'/detail-film'}>Sang Pemimpi</Link>
                </Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{backgroundColor: 'black'}}>
              <Card.Img variant="top" src={images.tvseries1} />
              <Card.Body>
                <Card.Title style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>Sang Pemimpi</Card.Title>
                <Card.Text style={{color: 'white', marginLeft: '-16px', marginTop: '-5px'}}>
                  2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
export default ListFilm;
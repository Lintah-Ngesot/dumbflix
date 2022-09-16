import { Container, Button, Col, Form, Row, FloatingLabel} from 'react-bootstrap';
import {AttachFile, Add} from '@mui/icons-material'

import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useMutation } from 'react-query';

import NavbarAdmin from '../../components/Navbar/NavbarAdmin';

import {API}  from '../../config/api'
// import {Link } from 'react-router-dom';
// import NavbarAdmin from '../components/NavbarAdmin';
// import {images} from '../../contstans'

function AddFilm () {
  // console.clear();
  // const title = 'Product admin';
  // document.title = 'DumbMerch | ' + title;

  let navigate = useNavigate();

  const [category, setCategory] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    title: '',
    image: '',
    year: '',
    description: '',
  }); //Store product data

  // Fetching category data
  const getCategories = async () => {
    try {
      const response = await API.get('/categories');
      setCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // For handle if category selected
  // const handleChangeCategoryId = (e) => {
  //   const id = e.target.value;
  //   const checked = e.target.checked;

  //   if (checked) {
  //     // Save category id if checked
  //     setCategoryId([...categoryId, parseInt(id)]);
  //   } else {
  //     // Delete category id from variable if unchecked
  //     let newCategoryId = categoryId.filter((categoryIdItem) => {
  //       return categoryIdItem != id;
  //     });
  //     setCategoryId(newCategoryId);
  //   }
  // };

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.title]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set('image', form.image[0], form.image[0].name);
      formData.set('title', form.title);
      formData.set('description', form.description);
      formData.set('year', form.year);
      formData.set('categoryId', categoryId);
      formData.set('category', category)

      console.log(form);

      // Insert product data
      const response = await API.post('/film', formData, config);
      console.log(response);

      navigate('/film');
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div style={{marginTop: '100px'}}>
    <NavbarAdmin/>
      <Container>
        <h3 style={{color: 'white', marginTop:'30px'}}>
          Add Film
        </h3>
      <Form onSubmit={(e) => handleSubmit.mutate(e)} style={{marginTop: '30px'}}>
        
        <Row>
        <Col xs={10}>
          {/* <Image src={images.attachfile}/> */}
          <Form.Control placeholder="Title" style={{backgroundColor: 'gray', color: 'white'}}/>
        </Col>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{backgroundColor: 'gray', padding: '5px', borderRadius: '5px', color: 'white'}} htmlFor='label'>Attach Thumbnail<AttachFile/></Form.Label>
            <Form.Control
            style={{display: 'none'}} 
            id='label' 
            onChange={handleChange}
            type="file" />
          </Form.Group>
        </Col>
        </Row>
        <Form.Control placeholder="Year" style={{backgroundColor: 'gray', color: 'white'}} />
          <Form.Select aria-label="Default select example" 
            style={{marginTop: '18px', 
                  backgroundColor: 'gray', 
                  color: 'white'}}>,
                  
            <option>Category</option>
            <option value="1">Movies</option>
            <option value="2">TV Series</option>
          </Form.Select>
          <FloatingLabel controlId="floatingTextarea2" label="Comments" style={{marginTop: '18px'}}>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px', 
              backgroundColor: 'gray', 
              color: 'white' }}/>
          </FloatingLabel>
      <Row style={{marginTop: '50px'}}>
        <Col xs={10}>
          <Form.Control placeholder="Title Episode" style={{backgroundColor: 'gray', color: 'white'}}/>
        </Col>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{backgroundColor: 'gray', padding: '5px', borderRadius: '5px', color: 'white'}} htmlFor='label'>Attach Thumbnail<AttachFile/></Form.Label>
            <Form.Control 
            style={{display: 'none'}}  
            id='label' 
            onChange={handleChange}
            type="file" />
          </Form.Group>
        </Col>
      </Row>
        <Form.Control placeholder="Link Film" style={{backgroundColor: 'gray', color: 'white'}} />
          <Form.Group controlId="formFile" className="mb-3" style={{marginTop: '18px'}}>
            <Form.Label style={{backgroundColor: 'gray', padding: '5px', borderRadius: '5px', color: 'white', width: '1115px'}} htmlFor='label'><Add style={{marginLeft: '500px'}}/></Form.Label>
        <Form.Control 
          style={{display: 'none'}}  
          id='label' 
          onChange={handleChange}
          type="file" />
        </Form.Group>
      </Form>
    <div style={{float: 'right'}}>
    <Button variant='danger'>
      Save
    </Button>
    </div>
    



      </Container>
    </div>
  );
}
export default AddFilm;
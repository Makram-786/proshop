import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Button} from 'react-bootstrap'
import Rating from '../components/Rating';
import axios from 'axios';
const ProductScreen = () => {
  const [product,setProduct] = useState({})
  const {id} = useParams();
  useEffect(()=>{
    const fetchProduct= async() =>{
      const res = await axios.get(`/api/products/${id}`);
      const data = await res.data;
      setProduct(data);
    }
    fetchProduct();
  },[])
  return (
    <>
    <Link to='/' className='btn btn-light p-3 my-3'>Go to back</Link>
     <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
               <h3> {product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </ListGroup.Item>
          <ListGroup.Item>
               <p> {product.description}</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
      <ListGroup >
          <ListGroup.Item>
             <Row>
              <Col>Price</Col>
              <Col>
               <strong> ${product.price}</strong>
              </Col>
             </Row>
              
          </ListGroup.Item>
          <ListGroup.Item>
             <Row>
              <Col>Status</Col>
              <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
             </Row>
 
          </ListGroup.Item>
          <ListGroup.Item>
            <Button className="btn-block" type="button" disabled={product.countInStock === 0}
            >Add to Cart</Button>

          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    </>
  )
}

export default ProductScreen
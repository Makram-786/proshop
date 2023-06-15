import {Card,Nav} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
  return (
   <Card className='my-3 p-3 rounded'>
    <Link to={`product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
    </Link>
    <Card.Body>
    <Link to={`product/${product._id}`}>
        <Card.Title as="div">{product.name}</Card.Title>
    </Link>
    <Card.Text className='my-3'>
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        {/* {product.rating} of {product.numReviews} reviews */}
    </Card.Text>
    <Card.Text as='h4'>${product.price}</Card.Text>
    </Card.Body>
   </Card>
  )
}

export default Product
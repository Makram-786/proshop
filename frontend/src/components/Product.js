import {Card} from 'react-bootstrap'

const Product = ({product}) => {
  return (
   <Card className='my-3 p-3 rounded'>
    <a href={`product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
    </a>
    <Card.Body>
    <a href={`product/${product._id}`}>
        <Card.Title as="div">{product.name}</Card.Title>
    </a>
    <Card.Text className='my-3'>
        {product.rating} of {product.numReviews} reviews
    </Card.Text>
    <Card.Text as='h4'>${product.price}</Card.Text>
    </Card.Body>
   </Card>
  )
}

export default Product
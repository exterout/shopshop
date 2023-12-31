import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
    const [product, setProduct] = useState([]);

    const { id: productId } = useParams();
    useEffect(() =>{
      const fetchproduct = async () => {
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      }
      fetchproduct();
    },[])
  return (
    <>
      <Link className="btn btn-light my-3" to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} 
              text={`${product.numReviews} reviews`} />  
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {product.description}
          </ListGroup.Item>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
              <Row >
                <Col>status</Col>
                <Col>
                  <strong>{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type='button'
                disabled={product.countInStock === 0}
              >
               Add to Cart 
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen

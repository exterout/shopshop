import { Container, Row, Col } from "react-bootstrap";

import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // console.log(currentYear);

  return (
    <>
        <Container>
            <Row>
                <Col className="text-center py-3">
                    <p>ShopShop &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer
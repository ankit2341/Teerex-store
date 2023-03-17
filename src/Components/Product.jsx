import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Product = ({ el }) => {
  return (
    <div className="product">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={el.imageURL} alt="image" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            Type:{el.type}
            {el.curency}.{el.price}
          </Card.Text>
          <Button variant="success">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

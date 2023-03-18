import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from "react-redux";
import { Addtocart } from "../Providers/actions";

const Product = ({ el }) => {
  const cart=useSelector(store=>store.cart);
  const dispatch=useDispatch();
  const handleAdd=(element)=>{
      let check=cart.filter((Item)=>{
        return Item.id==element.id
      })
      if(check.length>0){
         alert("Item Already available in cart")
      }
      else{
        const cartdata=[...cart,element]
        dispatch(Addtocart(cartdata));
        alert("Added to cart");
      }
      
  }

  return (
    <div className="product">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={el.imageURL} alt="image" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            Type :{"   "}{el.type}
          </Card.Text>
          <Card.Text>
          Price- {el.currency}.{el.price}
          </Card.Text>
          <Card.Text>
            For {el.gender}
          </Card.Text>
          <Button style={{width:"100%"}} variant="success" onClick={()=>{handleAdd(el)}}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

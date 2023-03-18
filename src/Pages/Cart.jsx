import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../Providers/store";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Styles/cart.css";
import { useDispatch } from "react-redux";
import { emptycart, Removefromcart } from "../Providers/actions";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    for (let i = 0; i < cart.length; i++) {
      tot += cart[i].price;
    }
    setTotal(tot);
  }, []);

  const handleRemove = (id) => {
    const removedItem = cart.filter((el) => {
      return el.id != id;
    });
    let tot = 0;
    for (let i = 0; i < removedItem.length; i++) {
      tot += removedItem[i].price;
    }
    setTotal(tot);
    dispatch(Removefromcart(removedItem));
    alert("Item removed from cart");
  };

  const emptyCart = () => {
    alert("Thank you for shopping with us");
    dispatch(emptycart());
  };

  return (
    <>
      <div className="navbar">
        <div>
          <Link style={{ textDecoration: "none" }} to="/">
            <h3 style={{ textDecoration: "none" }}>Teerex Store</h3>
          </Link>
        </div>
        <div>
          <Button
            title="cart"
            style={{ height: "100%", textAlign: "center" }}
            variant="light"
            size="lg sm"
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "end",
                float: "inline-end",
                width: "20px",
                height: "20px",
              }}
            >
              <svg
                width="50px"
                height="50px"
                fontSize="20px"
                viewBox="0 0 22 21"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.876 5.857V5.9h3.054c.256 0 .5.093.681.26.18.166.28.39.28.624v10.192c0 .725-.311 1.421-.868 1.935a3.102 3.102 0 0 1-2.1.803H5.883c-.788 0-1.544-.29-2.1-.803a2.634 2.634 0 0 1-.869-1.935V6.784c0-.233.1-.458.28-.624.18-.167.426-.26.682-.26H6.93V4.93c0-.97.418-1.902 1.163-2.59a4.149 4.149 0 0 1 2.81-1.074c1.055 0 2.066.387 2.81 1.074.746.688 1.163 1.62 1.163 2.59v.926Zm-1.965.043h.042V4.93c0-.504-.217-.986-.602-1.341a2.138 2.138 0 0 0-1.448-.554c-.542 0-1.063.199-1.448.554a1.826 1.826 0 0 0-.601 1.34V5.9H12.91ZM4.88 7.668h-.043v9.308c0 .258.112.505.308.686.196.182.462.283.738.283h10.038c.276 0 .542-.101.738-.283a.934.934 0 0 0 .308-.686V7.668H14.876V8.637a.85.85 0 0 1-.28.624c-.18.167-.425.26-.681.26-.256 0-.501-.093-.682-.26a.85.85 0 0 1-.28-.624V7.668H8.854V8.637a.85.85 0 0 1-.28.624c-.181.167-.426.26-.682.26-.256 0-.501-.093-.681-.26a.85.85 0 0 1-.28-.624V7.668H4.88Z"
                  fill="#000"
                  width="30"
                  height="30"
                  stroke="#FDFCFC"
                  strokeWidth="0.084"
                ></path>
              </svg>
              <span
                className=" position-absolute text-center"
                style={{
                  backgroundColor: "#FC2779",
                  color: "#FFF",
                  fontSize: "10px",
                  fontWeight: "500",
                  textAlign: "center",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  top: "-4px",
                  right: "-6px",
                  outline: "rgba(0, 0, 0, 0.5) solid 2px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>{cart.length}</span>
              </span>
            </div>
          </Button>
        </div>
      </div>
      <div className="cartlist">
        {cart.length > 0 ? (
          cart.map((el) => {
            return (
              <div className="product_cart" key={el.id}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={el.imageURL} alt="image" />
                  <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>
                      Type :{"   "}
                      {el.type}
                    </Card.Text>
                    <Card.Text>
                      Price- {el.currency}.{el.price}
                    </Card.Text>
                    <Card.Text>For {el.gender}</Card.Text>
                    <Card.Text></Card.Text>
                    <Button
                      style={{ width: "100%" }}
                      variant="danger"
                      onClick={() => {
                        handleRemove(el.id);
                      }}
                    >
                      Remove from cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        ) : (
          <h1>Empty cart no products added</h1>
        )}
      </div>
      <div className="fixed_cart">
        <div>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
            Total Price <span style={{ fontWeight: "normal" }}>Rs.{total}</span>
          </p>
        </div>
        <div>
          {" "}
          {cart.length > 0 ? (
            <Button variant="success" onClick={emptyCart}>
              CHECKOUT
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div style={{ width: "100%", height: "150px" }}></div>
    </>
  );
};

export default Cart;

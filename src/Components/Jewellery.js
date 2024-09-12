import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Footer } from './Footer';
import { useState } from 'react';

const jewelleryItems = [
  { img: "jewellery1.jpg", title: "Elegant Silver Necklace", price: "Rs. 2,500" },
  { img: "jewellery2.jpg", title: "Handcrafted Gold Earrings", price: "Rs. 3,200" },
  { img: "jewellery3.jpg", title: "Vintage Gemstone Ring", price: "Rs. 4,000" },
  { img: "jewellery4.jpg", title: "Classic Pearl Bracelet", price: "Rs. 1,800" }, 
  { img: "jewellery5.jpg", title: "Elegant Silver Necklace", price: "Rs. 2,500" },
  { img: "jewellery6.jpg", title: "Handcrafted Gold Earrings", price: "Rs. 3,200" },
  { img: "jewellery7.jpg", title: "Vintage Gemstone Ring", price: "Rs. 4,000" },
  { img: "jewellery8.jpg", title: "Classic Pearl Bracelet", price: "Rs. 1,800" },
  { img: "jewellery9.jpg", title: "Elegant Silver Necklace", price: "Rs. 2,500" },
  { img: "jewellery10.jpg", title: "Handcrafted Gold Earrings", price: "Rs. 3,200" },
  { img: "jewellery11.jpg", title: "Vintage Gemstone Ring", price: "Rs. 4,000" },
  { img: "jewellery12.jpg", title: "Classic Pearl Bracelet", price: "Rs. 1,800" },
  { img: "jewellery13.jpg", title: "Elegant Silver Necklace", price: "Rs. 2,500" },
  { img: "jewellery14.jpg", title: "Handcrafted Gold Earrings", price: "Rs. 3,200" },
  { img: "jewellery15.jpg", title: "Vintage Gemstone Ring", price: "Rs. 4,000" },
  { img: "jewellery16.jpg", title: "Classic Pearl Bracelet", price: "Rs. 1,800" },

  
]
export function Jewellery({ handleAddToCart }) {
  ;
  const [addedToCart, setAddedToCart] = useState({});

  const handleAdd = (item) => {
    handleAddToCart(item);
    setAddedToCart((prevState) => ({
      ...prevState,
      [item.title]: true,
    }));
    setTimeout(() => {
      setAddedToCart((prevState) => ({
        ...prevState,
        [item.title]: false,
      }));
    }, 2000); // Message disappears after 2 seconds
  };

  const productsPerRow = 4;
  const rows = [];

  for (let i = 0; i < jewelleryItems.length; i += productsPerRow) {
    const productRow = jewelleryItems.slice(i, i + productsPerRow);
    rows.push(productRow);
  }

  return (
    <>
      <div className="image-container">
        <img src="jewelleryBanner.jpg" alt="Jewellery Banner" className="main-image" />
        <div className="text-overlay">
          <h1>Elegant Jewellery Collection</h1>
          <p>Explore our exclusive range of handmade jewellery pieces</p>
        </div>
      </div>
      <div className="gallery-container">
      <h1 className="gallery-heading">Jewellery</h1>
      <p className="gallery-description">
        Discover our unique selection of handmade jewellry, crafted with love and attention to detail. 
        Whether you're looking for a statement piece or something delicate, our collection has something 
        for everyone.
      </p>
      <p className="gallery-description">
        From custom designs to timeless classics, each piece is made to reflect individual style 
        and elegance. Find the perfect jewellry that adds a personal touch to every occasion.
      </p>
    </div>
      <Container className="jewellery-background" fluid>
        {rows.map((row, rowIndex) => (
          <Row className="text-center" style={{ paddingTop: "20px" }} key={rowIndex}>
            <CardGroup>
              {row.map((item, productIndex) => (
                <Card className="custom-card" style={{ borderRadius: "30px" }} key={productIndex}>
                  <Card.Img variant="top" src={item.img} style={{ borderRadius: "30px", height: "300px" }} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.price}</Card.Text>
                    <div className="cart">
                    <Button 
                        className="add-to-cart-btn"
                        onClick={() => handleAdd(item)}
                        disabled={addedToCart[item.title]}
                      >
                        {addedToCart[item.title] ? "Added!" : "Add To Cart"}
                      </Button>
                      {addedToCart[item.title] && <p className="added-message">Item added to cart!</p>}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Row>
        ))}
      </Container>
      <Footer />
    </>
  );
}

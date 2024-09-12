import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Footer } from "./Footer";

const homeDecorItems = [
    { img: "HM2.jpg", title: "Designer Vase, home decor handmade minimalist vase bohemian", price: "Rs.2,384" },
    { img: "HM3.jpg", title: "Handmade Olive Wood and Rasin Beach Theme Ring Dish", price: "Rs.1,703" },
    { img: "HM4.jpg", title: "Ceramic Love Ballon Fridge, home decor handmade", price: "Rs.1,650" },
    { img: "HM5.jpg", title: "Embroidery Wall Hangings Decoration", price: "Rs.860" },
    { img: "HM6.jpg", title: "The MIXOR 12\" - Industrial Wall Clock", price: "Rs.9,727" },
    { img: "HM7.jpg", title: "Hanging custom stained glass Kingfisher", price: "Rs.4,080" },
    { img: "HM8.jpg", title: "x4 Air Plant Holder with Living Air Plant", price: "Rs. 6,851" },
    { img: "HM9.jpg", title: "Mini Bud Vases Set of 4, Concrete Small Flower Vase", price: "Rs.1,056" },
    { img: "HM10.jpg", title: "Peruvian Mirrors \"Honeycomb Collection 20cm Mixed I\"", price: "Rs. 19,117" },
    { img: "HM11.jpg", title: "Paper Flower Lamp for Unique Home Decor", price: "Rs. 3,733" },
    { img: "HM12.jpg", title: "Crochet Sunflowers, Handmade Gift, Home Decor", price: "Rs. 2,495" },
    { img: "HM13.jpg", title: "Macrame feather wall hanging, gift for mom", price: "Rs. 6,326" },
    { img: "HM14.jpg", title: "Mandala canvas painting 10x10 cm", price: "Rs.1,783" },
    { img: "HM15.jpg", title: "Ceramic Tea Light Holder", price: "Rs.4,280" },
    { img: "HM16.jpg", title: "Customized Paintings", price: "Rs." },
    { img: "HM17.jpg", title: "Handmade Floral Cushion Cover", price: "Rs.5,996" }
];

export function HomeDecor({ handleAddToCart }) {
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

  for (let i = 0; i < homeDecorItems.length; i += productsPerRow) {
    const productRow = homeDecorItems.slice(i, i + productsPerRow);
    rows.push(productRow);
  }

  return (
    <>
      <div className="image-container">
        <img src="HMBanner.jpg" alt="Home Decor Banner" className="main-image" />
        <div className="text-overlay">
          <h1>Exquisite Home Decoration Collection</h1>
          <p>Discover the elegance and craftsmanship of our handmade pieces</p>
        </div>
      </div>

      <div className="gallery-container">
        <h1 className="gallery-heading">Home Décor</h1>
        <p className="gallery-description">
          Transform your living space with our collection of handmade home décor items. 
          From elegant wall art to beautifully crafted furnishings, each piece is designed 
          to enhance your home's aesthetic.
        </p>
        <p className="gallery-description">
          Add a personal touch to your surroundings with unique decorations that reflect 
          your style. Our curated collection includes everything from rustic designs 
          to modern accents, all crafted with care.
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

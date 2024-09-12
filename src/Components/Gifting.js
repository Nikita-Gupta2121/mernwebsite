import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Footer } from './Footer';
import { useState } from 'react';

const giftingItems = [
  { img: "gift2.jpg", title: "Perching Peacocks Laddu Gopal Jhula", price: "Rs. 1,475" },
  { img: "gift1.jpg", title: "Scrapbook in Pastels Handmade Gifts", price: "Rs. 2,080" },
  { img: "gift3.jpg", title: "Wedding Embroidery Hoop", price: "Rs. 1,350" },
  { img: "gift4.jpg", title: "School Classroom Theme Miniature Frame", price: "Rs. 1,500" },
  { img: "gift5.jpg", title: "The MIXOR 12\" - Industrial Wall Clock", price: "Rs. 9,727" },
  { img: "gift6.jpg", title: "Hanging Custom Stained Glass Kingfisher", price: "Rs. 4,080" },
  { img: "gift7.jpg", title: "x4 Air Plant Holder with Living Air Plant", price: "Rs. 6,851" },
  { img: "gift8.jpg", title: "Mini Bud Vases Set of 4", price: "Rs. 1,056" },
  { img: "gift9.jpg", title: "Personalized Photo Popup Box", price: "Rs. 599" },
  { img: "gift10.jpg", title: "Love Themed Card in a Box", price: "Rs. 299" },
  { img: "gift11.jpg", title: "Rose Quartz Natural Stone Diyas", price: "Rs. 299" },
  { img: "gift12.jpg", title: "Customized Miniature Frame", price: "Rs. 1,000" },
  { img: "gift13.jpg", title: "Tower Explosion Box", price: "Rs. 1,483" },
  { img: "gift14.jpg", title: "Decorative Tea Light Candle Holder", price: "Rs. 350" },
  { img: "gift15.jpg", title: "Decorative Candle Wall Hanging", price: "Rs. 1,000" },
  { img: "gift16.jpg", title: "Pencilcarving Keychain", price: "Rs. 450" },
];

export function Gifting({ handleAddToCart }) {
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

  for (let i = 0; i < giftingItems.length; i += productsPerRow) {
    const productRow = giftingItems.slice(i, i + productsPerRow);
    rows.push(productRow);
  }

  return (
    <>
      <div className="image-container">
        <img src="giftBanner.jpg" alt="Gift Banner" className="main-image" />
        <div className="text-overlay">
          <h1>Exquisite Gift Collection</h1>
          <p>Discover the elegance and craftsmanship of our handmade gifts</p>
        </div>
      </div>
      <div className="gallery-container">
      <h1 className="gallery-heading">Gift Gallery</h1>
      <p className="gallery-description">
        Find a unique gift for your beloved one, whether it's for birthdays, anniversaries, 
        or just to show appreciation. Explore our handpicked selection of personalized and 
        beautifully crafted items that are perfect for every occasion.
      </p>
      <p className="gallery-description">
        From handcrafted jewellry to customized décor, discover thoughtful gifts that will make 
        your loved ones feel special. Celebrate moments that matter with meaningful presents 
        from our gallery.
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

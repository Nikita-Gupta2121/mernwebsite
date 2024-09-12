import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function Section2() {
  return (
    <>
      <div className="handmade-gifts-container">
      <h1 style={{fontSize: "2.5rem", color: "#d2691e", fontweight: "bold", textAlign: "center", marginTop: "5px"}}>
  Discover Unique Handcrafted Treasures at <span style={{color: "#8b4513;"}}>Hastkala Heaven</span>!
</h1>

<div className="container">
  <p className="handmade-gifts-text text-center text-md-left">
    Handmade gifts are unique and personal items that are created by hand rather than purchased from a store. They can be made from a variety of materials, such as fabric, wood, clay, or paper, and can range from simple to complex.
  </p>
</div>

      </div>
      <div style={{ padding: "30px", backgroundColor: "cornsilk" }}>
        <CardGroup>
          <Card className="custom-card" style={{ borderRadius: "30px" }}>
            <Card.Img variant="top" src="img5.jpg" style={{ borderRadius: "30px", height: "300px" }} />
            <Card.Body>
              <Card.Title>CUSTOMIZED WEDDING GIFT</Card.Title>
              <Card.Text>
                Rs.99
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card" style={{ borderRadius: "30px" }}>
            <Card.Img variant="top" src="img6.jpg" style={{ borderRadius: "30px", height: "300px" }} />
            <Card.Body>
              <Card.Title>Clay Toys</Card.Title>
              <Card.Text>
                Rs.299
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card" style={{ borderRadius: "30px" }}>
            <Card.Img variant="top" src="img7.jpg" style={{ borderRadius: "30px", height: "300px" }} />
            <Card.Body>
              <Card.Title>CUSTOMIZED EMBROIDERY HOOK</Card.Title>
              <Card.Text>
                Rs. 250
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card" style={{ borderRadius: "30px" }}>
            <Card.Img variant="top" src="img8.jpg" style={{ borderRadius: "30px", height: "300px" }} />
            <Card.Body>
              <Card.Title>EARRING</Card.Title>
              <Card.Text>
                Rs.299
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

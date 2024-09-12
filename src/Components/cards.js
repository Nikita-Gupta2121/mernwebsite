import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function Cards() {
  return (
    <>
    <div style={{ padding:"30px", backgroundColor:"cornsilk"}}>
    <CardGroup>
      <Card className="custom-card" style={{ borderRadius:"30px"}}>
        <Card.Img variant="top" src="img1.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>Clay Product</Card.Title>
          <Card.Text>
            Rs.99
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="custom-card" style={{borderRadius:"30px"}}>
        <Card.Img variant="top" src="img10.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>HAND CUFF</Card.Title>
          <Card.Text>
           Rs.499
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="custom-card" style={{ borderRadius:"30px"}}>
        <Card.Img variant="top" src="img3.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>Home decor</Card.Title>
          <Card.Text>
           Rs. 150
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="custom-card"style={{ borderRadius:"30px"}}>
        <Card.Img variant="top" src="img4.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>Mandala Art</Card.Title>
          <Card.Text>
            Rs.299
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    <div style={{ padding:"30px", backgroundColor:"cornsilk"}}>
    <CardGroup>
      <Card className="custom-card" style={{ borderRadius:"30px"}}>
        <Card.Img variant="top" src="img9.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>EARRING</Card.Title>
          <Card.Text>
            Rs.599
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="custom-card" style={{borderRadius:"30px"}}>
        <Card.Img variant="top" src="img2.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>Musical instruments</Card.Title>
          <Card.Text>
           Rs.199
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="custom-card" style={{ borderRadius:"30px"}}>
        <Card.Img variant="top" src="img11.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>BUTTERFLY EARRING</Card.Title>
          <Card.Text>
           Rs. 150
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="custom-card"style={{ borderRadius:"30px"}}>
        <Card.Img variant="top" src="img12.jpg" style={{borderRadius:"30px", height:"300px"}}/>
        <Card.Body>
          <Card.Title>MIRROR CHOKER</Card.Title>
          <Card.Text>
            Rs.799
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    <img src="weMadeBanner.jpg" alt="" className="img-fluid"/>
    </>
  );
}

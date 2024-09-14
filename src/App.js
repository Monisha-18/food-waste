import React, { useState } from 'react';
import './App.css'; // Ensure this file exists or adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGoogle } from 'react-icons/fa';

function App() {
  return (
    <div>
      {/* Header */}
      <div className="fixed-top">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Manage Waste Foundation</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#donation">Donations</Nav.Link>
                  <Nav.Link href="#mission-id">Missions</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div className="cont-sec">
          <Container>
            <Row>
              <Col lg={6}>
                <p>Contact No: <a href="tel:+911234****89">+91 1234****89</a></p>
              </Col>
              <Col lg={6}>
                <div className="social">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaYoutube /></a>
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaGoogle /></a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Home Section */}
      <section className="home-sec" id="home">
        <Container>
          <Row>
            <Col lg={6} className="d-flex align-items-center">
              <div className="home-info">
                <h1>Alone we can do little, together we can do so much</h1>
                <h2>We <span>Manage Waste Foundation</span> manage wastage for needy peoples</h2>
                <p>Every small contribution can make a big difference. Together, we can transform lives and create a sustainable future.</p>
                <Button href="#contact" className="btn1">Donate now</Button>
              </div>
            </Col>
            <Col lg={6} className="order-first order-lg-last">
              <div className="img-sec">
                <img src="img/img-1.png" alt="home-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation Section */}
      <section className="don-sec" id="donation">
        <Container>
          <div className="heading">
            <h2>We Manage Wastage or Donation like..</h2>
          </div>
          <Row>
            {/* Donation Boxes */}
            {[...Array(6)].map((_, index) => (
              <Col lg={4} key={index}>
                <div className="don-box">
                  <img src={`img/don/${index + 1}.png`} alt="donation-item" />
                  <h3>{["Clothes", "Footwear", "Fund", "Gadgets", "Stationary", "Food"][index]}</h3>
                  <p>{["Your unwanted clothes can be someone else's treasure. Donate today and make a difference!",
                      "Your old shoes can give someone a new start. Donate today and make a difference in their lives.",
                      "Every contribution, no matter how small, can make a big impact. Join us in making a difference.",
                      "Your old gadgets can be someone else's new beginning. Donate today and help bridge the digital divide.",
                      "Every pen, pencil, and notebook can ignite a mind. Donate your stationary and help shape the future.",
                      "Your generosity can nourish communities and create a world without hunger. Donate food today."][index]}</p>
                  <Button href="#contact" className="btn1">Donate Now</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission" id="mission-id">
        <Container>
          <div className="heading">
            <h2>Our Missions</h2>
            <p>We have delivered <span>Wastage</span> or <span>Donations</span> to needy Peoples</p>
          </div>
          <div className="gallery-sec">
            <Container>
              <div className="image-container">
                {[...Array(6)].map((_, index) => (
                  <div className="image" key={index}>
                    <img src={`img/miss/${index + 1}.jpg`} alt="mission-img" />
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-sec" id="about">
        <Container>
          <Row>
            <Col lg={4} className="about-img">
              <img src="img/img-2.jpeg" alt="about" />
            </Col>
            <Col lg={8}>
              <div className="heading">
                <h2>What We Do & Why We Do</h2>
              </div>
              <p>At Manage Waste Foundation, we are dedicated to providing essential resources to those in need, empowering communities to thrive, and creating a brighter future for all. We believe that every individual deserves a chance to succeed, and that compassion and kindness can change the world.</p>
              <p>Together, we can make a difference by sharing our resources, volunteering our time, and supporting our communities.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <Container>
          <div className="heading">
            <h2>Connect With Us</h2>
            <p>Fill this form, our team will collect your <span>Donation</span> or <span>Wastage</span> from your place.</p>
          </div>
          <Row>
            <Col lg={12} className="mt-5">
              <Form className="contact-form">
                <Row>
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Mobile No." />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control as="select">
                        <option>Choose Donation or Wastage</option>
                        <option value="food">Food</option>
                        <option value="clothes">Clothes</option>
                        <option value="footware">Footwear</option>
                        <option value="books">Books</option>
                        <option value="fund">Fund</option>
                        <option value="gadget">Ele. Gadgets</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control as="textarea" rows={3} placeholder="Message" />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mt-3">
                    <Button className="btn1 mt-5">Submit Details</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer>
        <Container>
          <Row>
            <Col lg={4}>
              <div className="col-one">
                <h4>Manage Waste Foundation</h4>
                <p>Address: 1, Lalbagh road, Bangalore 560027</p>
                <p>Contact No: <a href="tel:+911234****89">+91 1234****89</a></p>
                <p>Email: <a href="mailto:foundation@donate.com">foundation@donate.com</a></p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="col-two">
                <h4>Important Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#donation">Donations</a></li>
                  <li><a href="#mission-id">Missions</a></li>
                  <li><a href="#about">About us</a></li>
                  <li><a href="#contact">Contact us</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="col-one">
                <h4>Social Media</h4>
                <div className="social">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaYoutube /></a>
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaGoogle /></a>
                </div>
                <p>Copyright &copy; 2024 | All Right Reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;

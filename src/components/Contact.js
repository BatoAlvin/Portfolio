import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const myStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <h2>Websites Developed</h2>

           <p><a style={myStyle} href="https://nebbicatholicdiocese.org/" target="_blank">Nebbi Catholic Diocese</a></p> 

          <p><a style={myStyle} href="https://aobilab.com" target="_blank">AOBiLAB</a></p>

          <p><a style={myStyle} href="https://ecs.ac.ug" target="_blank">Equatorial College School</a></p>

          <p><a style={myStyle} href="https://nugsoft.com" target="_blank">Nugsoft Technologies</a></p>

        
          <p><a style={myStyle} href="https://comtechug.com" target="_blank">Comtech Ventures</a></p>

          <p><a style={myStyle} href="https://urbanhuesspa.com" target="_blank">Urban Huesspa</a></p>

          <p><a style={myStyle} href="https://veganfoodsuganda.com" target="_blank">Veganfoods Uganda</a></p>

          <p><a style={myStyle} href="http://buychinatouganda.com" target="_blank">BuyChina to Uganda</a></p>

          <p><a style={myStyle} href="https://ndejjequalityschool.com" target="_blank">Ndejje Quality School</a></p>

          <p><a style={myStyle} href="https://soulsrescue.org/" target="_blank">Souls Rescue Mission</a></p>

          <p><a style={myStyle} href="https://valourmartlogistics.com" target="_blank">Valourmart Logistics</a></p>

          <p><a style={myStyle} href="https://kkmf.co.ug" target="_blank">KKMF</a></p>

          <p><a style={myStyle} href="https://kibatsi.ac.ug/" target="_blank">Kibatsi</a></p>

          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
              <p>Phone: +256-757326941</p><br></br>
        
              <p>Email: alvinbato112@gmail.com</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

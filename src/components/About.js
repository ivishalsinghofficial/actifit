import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div>
              <Grid>
              <Row className="show-grid text-center">
                <Col className="pwerson-wrapper">
                  <Image src={require("./vishal1.jpg")} circle className="profile-pic" />
                </Col>
                  <h2>@Vishalsingh4997</h2><br />
                  <h4>
                  I am a blogger and I love to blog on various topics. In the mean time I also love to learn new programming languages. <br />
                
                  As soon as I polish this application I will make it available for everyone on GitHub. This Application is now officialy in Beta stage.<br />
                  You can contact me on Discord and I am also available on Telegram as well. <br />
                   As I said before I am still in learning phase so I will be not available for outside application production.
                  <br /> Anyways feel free to contact me. Discord:- Vishalsingh4997#5272 Telegram:- @vishalsingh4997
                  </h4>
              </Row>

              </Grid>

            </div>
        );
    }
}

export default About;

import React, { Component } from "react";
import Head from "../../components/Head/Head";
import { Grid, Row, Col } from "react-flexbox-grid";
import Image from "../../components/Image/Image";
import Helmet from "../../images/Helmet.png";
import Paragraph from '../../components/Paragraph/Paragraph';

const HelmetStyle = {
  display: 'inline-block',
}

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <Grid>
            <Row center='xs'>
              <Col xs={12}>
                <Row start='md' center='xs' middle='xs'>
                  <Col>
                    <Image style={HelmetStyle} sizex="40px" src={Helmet} />
                  </Col>
                  <Col>
                    <Paragraph style={{fontWeight:'900'}} fsize='22px' color='#ffb637'>Roman Rojas</Paragraph>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Head>
      </React.Fragment>
    );
  }
}

export default Header;

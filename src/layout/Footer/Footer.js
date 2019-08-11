import React, { Component } from "react";
import Foot from "../../components/Foot/Foot";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paragraph from "../../components/Paragraph/Paragraph";
import Section from "../../components/Section/Section";
import Icon from "../../components/Icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import Title from "../../components/Title/Title";
import Link from "../../components/Link/Link";
import Image from '../../components/Image/Image';
import Heart from '../../images/Heart.png';
import Border from '../../components/Border/Border';

const HeartStyle = {
  display: 'inline-block',
}

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Foot>
          <Section paddingTop='40px' paddingBottom='40px' backColor="#313131">
            <Grid>
              <Row center="xs">
                <Col xs={12} lg={8}>
                  <Row center="xs">
                    <Col xs={8}>
                      <Col xs={12}>
                        <Title fontSize='2.5rem'color="#ffb637">Say Hi</Title>
                      </Col>
                      <Col xs={12}>
                        <Paragraph padding='30px 0' fsize=".8rem">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </Paragraph>
                      </Col>
                    </Col>
                  </Row>
                  <Row center="xs">
                    <Col sm={6} xs={7}>
                      <Row center="xs" between="xs">
                        <Col>
                          <Link
                            target="_blank"
                            href="https://www.facebook.com/rrojaski"
                          >
                            <Icon>
                              <FontAwesomeIcon icon={faFacebookF} />
                            </Icon>
                          </Link>
                        </Col>
                        <Col>
                          <Link target="_blank" href="https://www.twitter.com/rrojaski">
                            <Icon>
                              <FontAwesomeIcon icon={faTwitter} />
                            </Icon>
                          </Link>
                        </Col>
                        <Col>
                          <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/roman-rojas-14a23a86"
                          >
                            <Icon>
                              <FontAwesomeIcon icon={faLinkedin} />
                            </Icon>
                          </Link>
                        </Col>
                        <Col>
                          <Link
                            target="_blank"
                            href="https://github.com/Rrojaski"
                          >
                            <Icon>
                              <FontAwesomeIcon icon={faGithub} />
                            </Icon>
                          </Link>
                        </Col>
                        <Col>
                          <Link
                            target="_blank"
                            href="https://dribbble.com/romanrojas"
                          >
                            <Icon>
                              <FontAwesomeIcon icon={faDribbble} />
                            </Icon>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Border margin='40px 0' borderColor='rgba(70,70,70,1)' />
                  <Row center="xs">
                    <Col>
                      <Paragraph padding='0' fsize=".75rem">
                        Made with <Image style={HeartStyle} sizex='.75rem'src={Heart} /> by Roman Rojas
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>
        </Foot>
      </React.Fragment>
    );
  }
}

export default Footer;

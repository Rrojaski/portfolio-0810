import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Section from "../../../components/Section/Section";
import Section2 from "../../../components/Section/Section2";
import Title from "../../../components/Title/Title";
import TitleContainer from "../../../components/Title/TitleContainer";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Image from "../../../components/Image/Image";
import Avatar from '../../../images/Avatar.png'
import Portrait from "../../../images/Portrait.jpg";
import Button from "../../../components/Button/Button";
import Test from "../../../images/Test.png";
import BackgroundYellow from "../../../images/BackgroundYellow.jpg";
import Pane from "../../../components/Pane/Pane";
import PaneOverlay from "../../../components/Pane/PaneOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link as ReactLink } from "react-router-dom";
import Resume from "../../../documents/Roman-Rojas-Resume.zip";
import Link from "../../../components/Link/Link";
import "./Home.css";
import ITSuport from "../../../images/ITSupport.jpg";
import AppDesign from "../../../images/AppDesign.png";
import UXResearch from "../../../images/UXResearch.jpg";


const AvatarStyle = {
  position: 'relative',
  top: '3px',
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null,
      backColor:
        "linear-gradient(to right, transparent 0%, transparent 25%, transparent 60%, #ffb637 60%, #ffb637 100%)"
    };
  }
  render() {
    //  const Desktop =
    //     "linear-gradient(to right, transparent 0%, transparent 25%, transparent 60%, #ffb637 60%, #ffb637 100%)";
    //  const Mobile = "transparent";
    // const HeroColor = window.innerWidth >= 650 ? Desktop : Mobile;
    // Need to make event lisctenr for resize for responsive backgrouind

    return (
      <React.Fragment>
        <Section
          className="hero-color"
          paddingTop="70px"
          paddingBottom="0"
          //backColor={HeroColor}
        >
          <Grid>
            <Row center="xs">
              <Col xs={11} lg={11}>
                <Row start="xs" middle="xs">
                  <Col lg={7} md={7} xs={12}>
                    <Paragraph color="#fff" fsize="1rem">
                      Hello
                    </Paragraph>
                    <Title color="#ffb637" largeFont>
                      I'm Roman
                    </Title>
                    <Paragraph color="#fff" lineHeight="2.5rem" fsize="2rem">
                      Freelance Web Developer & IT Specialist
                    </Paragraph>
                    <ReactLink to="/contact">
                      <Button
                        color="#ffb637"
                        bcolor="none"
                        hcolor="#fff"
                        hbcolor="#ffb637"
                        borderColor="#ffb637"
                        hborderColor="#ffb637"
                        margin="20px 0"
                        padding="15px 50px"
                        fsize=".75rem"
                      >
                        HIRE ME
                      </Button>
                    </ReactLink>
                  </Col>
                  <Col lg={5} md={5} xs={1}>
                    <Image style={AvatarStyle} sizex="100%" src={Avatar} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>

        <Section backColor="#313131">
          <Grid>
            <Row center="xs">
              <Col xs={11} lg={11}>
                <Row between="xs" start="xs" middle="xs">
                  <Col md={4} xs={1}>
                    <Image sizex="100%" src={Portrait} />
                  </Col>
                  <Col md={7} xs={12}>
                    <TitleContainer bcolor="#ffb637" margin="0">
                      <Title>About Me</Title>
                    </TitleContainer>
                    <Paragraph fsize=".8rem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Paragraph>
                    <Paragraph fsize=".8rem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.ke Aldus PageMaker including versions
                      of Lorem Ipsum.
                    </Paragraph>
                    <Row>
                      <Col>
                        <ReactLink to="/contact">
                          <Button
                            color="#ffb637"
                            bcolor="none"
                            hcolor="#fff"
                            hbcolor="#ffb637"
                            borderColor="#ffb637"
                            hborderColor="#ffb637"
                            margin="20px 0"
                            padding="14px 30px"
                            fsize=".75rem"
                          >
                            HIRE ME
                          </Button>
                        </ReactLink>
                      </Col>
                      <Col>
                        <Link href={Resume} download>
                          <Button
                            color="#ffb637"
                            bcolor="none"
                            hcolor="#fff"
                            hbcolor="#ffb637"
                            borderColor="#ffb637"
                            hborderColor="#ffb637"
                            margin="20px 10px"
                            padding="14px 30px"
                            fsize=".75rem"
                          >
                            DOWNLOAD CV
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>

        <Section paddingBottom="60px">
          <Grid>
            <Row xs={11} lg={11} center="xs">
              <Col>
                <Row start="xs">
                  <Col md={6} xs={11}>
                    <TitleContainer bcolor="#ffb637" margin="0">
                      <Title>Services</Title>
                    </TitleContainer>
                    <Paragraph padding="30px 0" fsize=".8rem">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </Paragraph>
                  </Col>
                </Row>
                <Col>
                  <Row start="xs">
                    <Col md={6} xs={12}>
                      <Pane backImage={Test}>
                        <PaneOverlay backColor="linear-gradient(135deg, #37defe, rgba(255,0,0,0) 230%)">
                          <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                          <Paragraph
                            padding="20px 0 0 0"
                            fsize="1.5rem"
                            color="#fff"
                          >
                            Web Development
                          </Paragraph>
                          <Paragraph fsize=".8rem" color="#fff">
                            It is a long established fact that a reader will be
                            distracted.
                          </Paragraph>
                        </PaneOverlay>
                      </Pane>
                    </Col>
                    <Col md={6} xs={12}>
                      <Pane backImage={ITSuport}>
                        <PaneOverlay backColor="linear-gradient(135deg, #fbd64c, rgba(255,0,0,0) 230%)">
                          <FontAwesomeIcon icon={faTools} size="2x" />
                          <Paragraph
                            padding="20px 0 0 0"
                            fsize="1.5rem"
                            color="#fff"
                          >
                            IT Support
                          </Paragraph>
                          <Paragraph fsize=".8rem" color="#fff">
                            It is a long established fact that a reader will be
                            distracted.
                          </Paragraph>
                        </PaneOverlay>
                      </Pane>
                    </Col>
                  </Row>
                  <Row start="xs">
                    <Col md={6} xs={12}>
                      <Pane backImage={UXResearch}>
                        <PaneOverlay backColor="linear-gradient(135deg, #f354b0, rgba(255,0,0,0) 230%)">
                          <FontAwesomeIcon icon={faSearch} size="2x" />
                          <Paragraph
                            padding="20px 0 0 0"
                            fsize="1.5rem"
                            color="#fff"
                          >
                            UX Research
                          </Paragraph>
                          <Paragraph
                            padding="20px 0 0 0"
                            fsize=".8rem"
                            color="#fff"
                          >
                            It is a long established fact that a reader will be
                            distracted.
                          </Paragraph>
                        </PaneOverlay>
                      </Pane>
                    </Col>
                    <Col md={6} xs={12}>
                      <Pane backImage={AppDesign}>
                        <PaneOverlay backColor="linear-gradient(135deg, #2ec693, rgba(255,0,0,0) 230%)">
                          <FontAwesomeIcon icon={faPencilRuler} size="2x" />
                          <Paragraph
                            padding="20px 0 0 0"
                            fsize="1.5rem"
                            color="#fff"
                          >
                            App Design
                          </Paragraph>
                          <Paragraph fsize=".8rem" color="#fff">
                            It is a long established fact that a reader will be
                            distracted.
                          </Paragraph>
                        </PaneOverlay>
                      </Pane>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </Row>
          </Grid>
        </Section>

        <Section2 backImage={BackgroundYellow}>
          <Grid>
            <Row center="xs">
              <Col xs={11} lg={11}>
                <Row center="xs">
                  <Col>
                    <TitleContainer bcolor="#fff" margin="auto">
                      <Title>Have any project in mind?</Title>
                    </TitleContainer>
                    <ReactLink to="/contact">
                      <Button
                        color="#000"
                        bcolor="#fff"
                        hcolor="#fff"
                        hbcolor="linear-gradient(to top, #1d37be 0%, #1b5cde 100%)"
                        borderColor="#fff"
                        hborderColor="#2F66A9"
                        margin="20px 0"
                        padding="15px 50px"
                        fsize=".75rem"
                      >
                        HIRE ME
                      </Button>
                    </ReactLink>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section2>
      </React.Fragment>
    );
  }
}

export default Home;

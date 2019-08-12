import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Section from "../../../components/Section/Section";
import { Link as ReactLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Form/Input/Input";
import TextArea from "../../../components/Form/Input/TextArea";
import Border from '../../../components/Border/Border';
import Link from '../../../components/Link/Link';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Section paddingTop="120px">
          <Grid>
            <Row center="xs">
              <Col xs={11} lg={11}>
                <Row start="xs">
                  <Col xs={12} md={6}>
                    <Title color="#ffb637" largeFont>
                      Hello!
                    </Title>
                    <Paragraph>
                      Let's work together to create game-changing experiences
                    </Paragraph>
                    <ReactLink to="/">
                      <Button
                        color="#ffb637"
                        bcolor="none"
                        hcolor="#fff"
                        hbcolor="#ffb637"
                        borderColor="#ffb637"
                        hborderColor="#ffb637"
                        margin="30px 0"
                        padding="10px 15px"
                        fsize=".75rem"
                      >
                        Return
                      </Button>
                    </ReactLink>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form>
                      <Row center="xs">
                        <Col xs={6}>
                          <Input placeholder="Name" required />
                        </Col>
                        <Col xs={6}>
                          <Input placeholder="Email" type="email" required />
                        </Col>
                      </Row>
                      <Input placeholder="Subject" required />
                      <TextArea largeText placeholder="Message" required />
                      <Input
                        pointer
                        color="#fff"
                        bold
                        backColor="linear-gradient(to top, #1d37be 0%, #1b5cde 100%)"
                        noMargin
                        type="submit"
                        value="SEND"
                      />
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section paddingTop='0' paddingBottom='0'>
          <Grid>
            <Row>
              <Col xs={11}>
                <Border margin='0' borderColor='rgba(70,70,70,1)' />
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Row  center="xs">
              <Col xs={11}>
                <Row center='xs'>
                  <Col xs={12}>
                    <Title color='#ffb637'>Contact Me</Title>
                  </Col>
                  <Col>
                    <Row start="xs">
                      <Col xs={6}>
                        <Link href='tel:+904 2715715'>
                          <Paragraph padding='50px 0' color='#fff'>1-904-271-5715</Paragraph>
                        </Link>                        
                      </Col>
                      <Col xs={6}>
                        <Link href='mailto: rrojaski@gmail.com'>
                          <Paragraph padding='50px 0' color='#fff' >rrojaski@gmail.com</Paragraph>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
      </React.Fragment>
    );
  }
}

export default Contact;

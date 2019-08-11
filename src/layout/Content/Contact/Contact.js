import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Section from "../../../components/Section/Section";
import { Link as ReactLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Form/Input/Input";
import TextArea from '../../../components/Form/Input/TextArea';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Section paddingTop="120px">
          <Grid>
            <Row center='xs'>
              <Col xs={11} lg={11}>
                <Row start='xs'>
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
                      <Row center='xs'>
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
                        color='#fff'
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
      </React.Fragment>
    );
  }
}

export default Contact;

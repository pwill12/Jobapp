import { NumbersTwoTone, OneKkOutlined } from "@mui/icons-material";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
// import Sonnet from ''
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 50px 0px;
`;
const Img = styled.div`
  width: 100%;
  max-height: 80vh;
  margin-left: 0px;

`;
const ImgCon = styled.img`
  max-width: 100%;
  max-height: 80vh;
`;
const Works = styled.h3``;
const Works2 = styled.p``;

function Tabs() {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#f1f0fe" }}>
      <h2 style={{fontSize: '30px', fontWeight: 600,wordSpacing: '5px'}}>How it works</h2>
      {/* <p>Post a project and tell us about it</p> */}
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-row">
                <Nav.Item className="">
                  <Nav.Link eventKey="first" style={{ marginLeft: "0px",color: 'burlywood',fontSize: '20px' }}>
                    <NumbersTwoTone style={{marginTop: '-3px'}}/> Register Account
                  </Nav.Link>
                  <p style={{padding: '10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, corporis.</p>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Verify your Email</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content style={{}}>
                <Tab.Pane eventKey="first" style={{marginLeft: '100px'}}>
                  <Img>
                    <ImgCon src="images/process-02.png" />
                  </Img>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Img>
                    <ImgCon src="images/xcc-min1.png" />
                  </Img>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Tabs;

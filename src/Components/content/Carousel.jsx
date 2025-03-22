import { FormatQuoteOutlined, FormatQuoteTwoTone, QueueTwoTone } from "@mui/icons-material";
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Mobile } from "../../Mobile";

const Cont = styled.div`
  ${Mobile({display: 'none'})}
  

`
const Container = styled.div`
  display: flex;
  ${"" /* flex-direction: column; */}
  justify-content: center;
  padding: 50px 200px;
  margin-bottom: 120px;
  ${Mobile({padding: '0px'})}


`;
const Item = styled.div`
  display: flex;
  ${'' /* padding: 100px; */}
  overflow: hidden;
  justify-content: center;
  align-items:center;
  ${Mobile({flexDirection: 'column'})}

`;
const Imgcon = styled.div`
  display: flex;
  flex: 1;
  text-align: right;
  max-height: 70vh;
  min-height: 70vh;
  max-width: 70%;
  min-width: 60%;
  ${Mobile({width: '100%',flex: 'none',maxHeight: '50vh'})}

  ${'' /* width: 50%; */}
`;
const Img = styled.img`
  max-width: 60%;
  ${'' /* max-height: 60%; */}
  min-height: 60%;
  object-fit: cover;
  display: flex;
  justify-content: flex-end;
  margin-left: 100px;
  align-items: flex-end;
  ${Mobile({width: '100%',maxHeight: '50vh'})}

`;
const Details = styled.div`
  ${'' /* display: flex; */}
  background-color: white;
  flex: 1;
  flex-direction: column;
  height: 60vh;
  display: flex;
  margin-left: -170px;
  max-height: 70vh;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
`;
const Name = styled.h4`
  font-weight: 600;
  margin-top: 15px;
  font-size: 32px;
  font-family: 'Roboto','sans-serif';

`;
const Content = styled.p`
  padding: 15px;

`;

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
    };
    return (
      <Cont style={{textAlign: 'center',backgroundColor: '#f1f0fe',overflow: 'hidden',}}>
        <h2 style={{marginTop: '120px'}}>Testimonials</h2>
        <Slider {...settings}>
        <Container>
          <Item>
            <Imgcon>
              <Img src="images/testimonial-db6eaab6e26ac687d44a594f7af33696.png" />
            </Imgcon>
            <Details>
            <FormatQuoteOutlined/>
              <Name>Ceo Wiki Tech</Name>
              <Content>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, quas.
              </Content>
            </Details>
          </Item>
          </Container>
          <Container>
          <Item>
            <Imgcon>
              <Img src="images/content-2-img1-49c00e1046a5bc3a8ec2a1342bd07f5b.png" />
            </Imgcon>
            <Details>
            <FormatQuoteTwoTone/>
              <Name>Sanders Helen</Name>
              <Content>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat,Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae distinctio, itaque aspernatur molestias veniam?
              </Content>
              <Content>Current Works at Google</Content>
            </Details>
          </Item>
          </Container>
        </Slider>
      </Cont>
    );
  }
}

import {
  EmailOutlined,
  FacebookOutlined,
  LocationCityOutlined,
  Pinterest,
  Send,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { Mobile } from "../Mobile";

const Container = styled.div`
  padding: 20px;
  ${"" /* display: flex; */}
  align-items: center;
  height: 90vh;
  ${Mobile({
    overflow: "hidden",
    height: "90vh",
  })}
`;

const Section = styled.div`
  padding: 200px;
  display: flex;
  justify-content: center;
  ${Mobile({
    flexDirection: "column",
    padding: "20px",
  })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 20px;
  margin-top: -4px;
  ${Mobile({
    marginRight: "0px",
  })}
`;

const Job = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 10px;
  ${Mobile({
    fontSize: "20px",
  })}
`;

const Text = styled.div`
  color: grey;
`;

const Social = styled.div`
  display: flex;
  margin-right: 10px;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-right: 40px;
  ${Mobile({ marginTop: "20px" })}
`;

const Company = styled.div`
  margin-right: 40px;
`;

const Info = styled.h3`
  font-size: 25px;
  font-weight: 600;
  ${Mobile({
    fontSize: "20px",
  })}
`;

const Content = styled.p`
  margin-top: 15px;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Subscribe = styled.h4`
  ${Mobile({
    fontSize: "30px",
  })}
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  ${Mobile({
    width: "270px",
  })}
`;

const Button = styled.button`
  position: absolute;
  margin-left: -75px;
  margin-top: 6px;
  width: 70px;
  padding: 5px;
  color: white;
  border: none;
  background-color: lightgreen;
  ${Mobile({
    marginLeft: "-80px",
  })}
`;

const Copyright = styled.h3`
  text-align: center;
  font-size: 22px;
  ${Mobile({
    marginTop: "80px",
  })}
`;

const InputCon = styled.div`
  position: relative;
  margin-top: 10px;
  ${Mobile({
    margin: "5px",
  })}
`;

const Address = styled.div`
  display: flex;
`;
const Para = styled.p`
  margin-left: 10px;
`;

const Socon = styled.div`
  margin-right: 10px;
`;

function Footer() {
  return (
    <Container>
      <Section>
        <Left>
          <Job>Contact Details</Job>
          <Text>
            <Address>
              <LocationCityOutlined />
              <Para>14, ojodu ikeja off lagos,Nigeria</Para>
            </Address>
            <Address>
              <EmailOutlined />
              <Para>princesolo919@gmail.com</Para>
            </Address>
            <Social>
              <Socon>
                <FacebookOutlined />
              </Socon>
              <Socon>
                <Pinterest />
              </Socon>
              <Socon>
                <Twitter />
              </Socon>
            </Social>
          </Text>
        </Left>
        <Center>
          <Company>
            <Info>Company</Info>
            <Content>Pricing</Content>
            <Content>Company</Content>
            <Content>More Info</Content>
          </Company>
          <Company>
            <Info>Category</Info>
            <Content>Pricing</Content>
            <Content>Company</Content>
            <Content>More Info</Content>
          </Company>
        </Center>
        <Right>
          <Subscribe>Subscribe</Subscribe>
          <InputCon>
            <Input type="email" name="" id="" placeholder="email address" />
            <Button>
              <Send />
            </Button>
          </InputCon>
        </Right>
      </Section>
      <Copyright>Copyright will©2025 all right reserved</Copyright>
    </Container>
  );
}

export default Footer;

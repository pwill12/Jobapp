import React from 'react'
import { Mobile } from '../Mobile'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  background: -webkit-linear-gradient(-30deg, #83c3e3 50%, #ec94ec 50%);
  height: 60vh;
  display: flex;
  align-items: center;
  ${Mobile({
    height: '100%',background: '-webkit-linear-gradient(-90deg, #83c3e3 50%, #ec94ec 50%)'
  })}


`
const Section = styled.div`
  padding: 50px 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mobile({
    flexDirection: 'column',padding: '40px 20px'
  })}

`
const Job = styled.div`
  margin-right: 30px;
  ${Mobile({
    marginBottom: '40px',marginRight: '0px'
  })}

`
const Expert = styled.div`
  margin-left: 30px;
  ${Mobile({
    marginTop: '40px',marginLeft: '0px'
  })}
  
`
const Looking = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: 600;
  ${Mobile({
  fontSize: '30px'
  })}
`
const Para = styled.p``
const Button = styled.button`
  border-radius: 7px;
  border: none;
  padding: 8px;
  width: 120px;
  background: black;
  color: white;
  margin-top: 20px;

`







function PostJob() {
  return (
    <Container>
        <Section>
            <Job>
                <Looking>Looking for a Job</Looking>
                <Para>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia recusandae culpa velit distinctio dolor.</Para>

                <Button>Find Job</Button>
            </Job>
            <Expert>
                <Looking>Looking for an expert</Looking>
                <Para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse asperiores laudantium vero.</Para>
                <Button>Find Expert</Button>
            </Expert>
        </Section>
    </Container>
  )
}

export default PostJob
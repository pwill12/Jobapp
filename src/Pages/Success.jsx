import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MyNavbar from '../Components/Navbar'


const Img = styled.img`
  width: 50%;
  height: 40%;

`

function Successfull() {
  return (
    <div>
        <MyNavbar/>
        <Container style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
            <Img src='Images/404error.png'/>
            <div>
            <h5>we encountered an error</h5>
            <p>pls chheck your card details</p>
            <Link to={'/admin'}>
              <Button>Go to Dashboard login</Button>
            </Link>
            </div>
        </Container>
    </div>
  )
}

export default Successfull
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
            <Img src='Images/Done-rafiki.png'/>
            <div>
            <h5>Account Successfully Created</h5>
            <p>Congratulation...Your Account has been Successfully Created..Go to the Admin Dashboard to login</p>
            <Link to={'/admin'}>
              <Button>Go to Dashboard login</Button>
            </Link>
            </div>
        </Container>
    </div>
  )
}

export default Successfull
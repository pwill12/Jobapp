import React from 'react'
import styled from 'styled-components'
import MultipleSelectChip from './FilterItems'
import { Mobile } from '../Mobile'
import { MultipleSelected } from './FilterItems'

const Container = styled.div`
  ${'' /* margin-top: 30px; */}
  height: 30vh;
  display: flex;
  justify-content: center;
  ${Mobile({height: '40vh'})}



`
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Mobile({flexDirection: 'column'})}


`
const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  margin-right: 25px;
  ${Mobile({
    marginRight: '0px',width: 300
  })}
`
const Select = styled.select`
  padding: 16px;
  color:black;
  margin-right: 25px;
  width:150px;
  ${Mobile({
    marginRight: '0px',width: 300,marginTop: '15px'
  })}

`
const Option = styled.option`
  margin-top: 30px;
  margin-right: 10px;
  padding:20px;
  ${'' /* ${Mobile({
    marginRight: '0px'
  })} */}

`

const Multple = styled.div`
  margin-right: 25px;
  ${Mobile({
    marginRight: '0px',marginTop: '15px'
  })}
`

const Button = styled.button`
  padding: 10px;
  border: none;
  margin-top: 15px;
  width: 300;
  display: flex;
  align-items: center;


`





function Search() {
  return (
    <Container>
        <Section>
            <Input placeholder='search'/>
            {/* <Select>
                <Option>location</Option>
                <Option>NIg</Option>
                <Option>USA</Option>


            </Select> */}
            <Multple>
            <MultipleSelected/>
            </Multple>
            <Select>
                <Option disabled>school</Option>
                <Option>job</Option>
            </Select>
            <Button>Find a Job</Button>
        </Section>
    </Container>
  )
}

export default Search
import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
 height: 60px ;
 ${mobile({height:'50px'})};
`;
const Wrapper = styled.div`
padding:10px 20px ;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center
`
const SearchContainer = styled.div`
 border:1px solid lightgray;
 display:flex;
 align-items:center;
 margin-left:25px;
 padding:5px;
 ${mobile({marginLeft:'7px'})};
`
const Language = styled.span`
 font-size:14px;
 cursor:pointer;
 background-color:black;
 color:white;
 padding:3px;
 ${mobile({display:'none'})};
`
const Input = styled.input`
 border:none;
 outline:none;
 ${mobile({width:'45px'})};
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.div`
  font-weight:bold;
  font-size:30px;
  cursor:pointer;
  transition:all 0.3s ease;

 &:hover {
  transform:scale(1.01,1.01);
 }
  ${mobile({fontSize:'20px',marginLeft:'15px'})};


`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
${mobile({alignItems:'center',flex:'2'})};
`

const MenuItem = styled.div`
 font-size:14px;
 cursor:pointer;
 margin-right:10px;
 transition:all 0.3s ease;

 &:hover {
  transform:scale(1.1,1.1);
 }
`
const Linke = styled.a`
 text-decoration:none;
 color:black;
`

export default function Navbar() {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search' />
                <Search style={{color:'gray' , fontSize:'16'}} />
            </SearchContainer>
        </Left>
        <Center>
            <Linke href='/'><Logo>KASEM FASH.</Logo></Linke>
        </Center>
        <Right>
            <Linke href='/Register'><MenuItem>Register</MenuItem></Linke>
            <Linke href='/Login'><MenuItem>Sign in</MenuItem></Linke>
            <MenuItem>
             <Badge badgeContent={4} color="primary">
              <Linke href='/Cart'><ShoppingCartOutlined /></Linke>
             </Badge>
            </MenuItem>
        </Right>

        </Wrapper>

    </Container>
  )
}

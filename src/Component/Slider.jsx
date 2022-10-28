import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SliderItem } from '../data'
import { mobile } from '../Responsive';

    const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({display:'none'})};
    `
    const Arrow= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    width:50px;
    background-color:#fff7f7;
    border-radius:50%;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
    transition:all 1.5s ease;
    `

    const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform:translateX(${(props)=> props.slideIndex * -100}vw);
    transition:all 1.5s ease;
    `
    const Slide = styled.div`
    width:100vw;
    height:100%;
    display:flex;
    align-items:center;
    background-color: ${props=> props.bg};
    `
    const ImgContainer = styled.div`
    height:100%;
    text-align:center;
    margin-top:5%;
    flex:1;
    `;

    const Image = styled.img`
    height:80%;
    `;

    const InfoContainer = styled.div`
    flex:1;
    padding:50px;
    `;

    const Title = styled.h1`
    font-size:70px;
    `
    const Desc = styled.p`
    margin:50px 0 ;
    font-weight:500;
    letter-spacing:3px;
    font-size:20px;
    `
    const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
    transition:all 0.4s ease;

 &:hover {
  transform:scale(1.1,1.1);
 }
    `

    const Linke = styled.a`
 text-decoration:none;
 color:black;
`


export default function Slider(props) {
  

     const [slideIndex , setSlideIndex ] = useState(0)

  const handleClick = (direction) => {
     
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0)
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 2)
    }
  }



  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {SliderItem.map((item) => (
            

              
              <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
               <Image src={item.img} alt='/' />
            </ImgContainer>

            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>
                   {item.desc}
                </Desc>
                <Linke href='/ProductList'><Button onClick={() =>  props.setUser(true) }>SHOW NOW</Button></Linke>
            </InfoContainer>
           
          </Slide>

            ))}

        </Wrapper>

        <Arrow direction='right' onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

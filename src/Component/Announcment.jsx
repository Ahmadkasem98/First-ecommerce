import React from 'react'
import styled from 'styled-components'

export default function Announcment() {

    const Container = styled.div`
     height:40px;
     background-image:url("/anno.jpg");
     background-size:cover;
     display:flex;
     align-items:center;
     justify-content:center;
     background-color:teal;
     font-size:14px;
     font-weight:500px;
     color:white;
    `
  return (
    <Container>
        Super Deal Free Shipping on Orders Over $50.
    </Container>
  )
}

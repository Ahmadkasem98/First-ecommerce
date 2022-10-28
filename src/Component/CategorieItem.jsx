import styled from "styled-components"
import { mobile } from '../Responsive';


 const Container = styled.div`
  flex:1;
  height:80vh;
  margin:3px;
  position:relative;
  ${mobile({marginTop:'20px'})};
 `
 const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  ${mobile({height:'40vh'})};
 `
 const Info = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

 `
 const Title = styled.h1`
   color:white;
   margin-bottom:20px;
 `
 const Button = styled.button`
  border:none;
  padding:10px;
  font-weight:600;
  color:gray;
  background-color:white;
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

export default function CategorieItem({item}) {
  

  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Linke href='/ProductList'><Button>SHOP NOW</Button></Linke>
        </Info>
    </Container>
  )
}

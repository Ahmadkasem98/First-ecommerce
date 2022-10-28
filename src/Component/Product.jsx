import styled from "styled-components"
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgb(0,0,0,0.3);
z-index:3;
display:flex;
justify-content:center;
align-items:center;
transition:all 1s ease;
`

 const Container = styled.div`
  flex:1;
  min-width:280px;
  height:350px;
  margin:5px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#f5fbfd;
  position:relative;

   &:hover ${Info} {
     opacity:1;
   }
 `
 const Circle = styled.div`
  width:200px;
  height:200px;
  background-color:white;
  position:absolute;
  border-radius:50%;

 `
 const Image = styled.img`
  height:100%;
  width:100%;
  object-fit:cover;
  z-index:2;
 `


 const Icon = styled.div`
  width:40px;
  height:40px;
  background-color:white;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  margin:10px;
  transition:all 0.5s ease;

  &:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
  }
 `
 const Linke = styled.a`
 text-decoration:none;
 color:black;
`

export default function Product({item}) {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
            <Linke href='/Cart'><ShoppingCartOutlined /></Linke>
            </Icon>
            <Icon>
                <Search />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
        
    </Container>
  )
}

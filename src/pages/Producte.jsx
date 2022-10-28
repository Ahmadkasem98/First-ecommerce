import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcment from "../Component/Announcment"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import NewsLetter from "../Component/NewsLetter"
import { mobile } from "../Responsive"

 const Container = styled.div``
 const Wrapper = styled.div`
   padding:50px;
   display:flex;
   ${mobile({flexDirection:'column',padding:'10px'})}
 `
 const ImageContainer = styled.div`
  flex:1;
 `
 const Image = styled.img`
  width:100%;
  height:80vh;
  object-fit:cover;
  ${mobile({height:'50vh'})};
 `
 const InfoContainer = styled.div`
  flex:1; 
  padding:0px 50px;
  ${mobile({padding:'10px'})};
  `
 const Title = styled.h1`
  font-weight:200;
 `
 const Desc = styled.div`
  margin:20px 0;
  color:#999;
 `
 const Price = styled.span`
 font-weight:100;
 font-size:40px;
 `

 const FilterContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width:50%;
  margin:20px 0;
  ${mobile({width:'100%'})};
 `
 const Fillter = styled.div`
  display:flex;
  align-items:center;
 `
 const FilterTitle = styled.span`
  font-size:20px;
  font-weight:300;
 `
 const FilterColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props => props.color};
  margin:0 5px;
  cursor:pointer;
 `
 const FilterSize = styled.select`
  margin-left:10px;
  padding:5px;
  cursor:pointer;
  color:teal;
  border:1px solid teal ;
  border-radius:4px;
  outline-color:teal;
 `
 const FilterSizeOption = styled.option``

 const AddContainer = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  ${mobile({width:'100%'})};
 `
 const AmountContainer = styled.div`
  display:flex;
  align-items:center;
  font-weight:700;
 `
 const Amount = styled.span`
  width:30px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0 5px;
 `
 const Button = styled.button`
  padding:10px;
  border:1.5px solid teal;
  border-radius:4px;
  background-color:white;
  color:teal;
  font-weight:700;
  cursor:pointer;

  &:hover{
    background-color:#ddd;
  }
 `

export default function Producte() {
  return (
    <Container>
        <Navbar/>
        <Announcment/>
        <Wrapper>
            <ImageContainer>
              <Image src='/product1.jpg' />
            </ImageContainer>
            <InfoContainer>
                <Title>Denum Jumpsuit</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est beatae dicta soluta, pariatur eos quam, eum ea ad tempore sint quas quae et laboriosam repellendus consequuntur aliquid esse non fuga.</Desc>
                <Price>$ 20 </Price>
                <FilterContainer>
                <Fillter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black' />
                    <FilterColor color='darkblue' />
                    <FilterColor color='gray' />
                </Fillter>

                <Fillter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Fillter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Add style={{cursor:'pointer'}} />
                        <Amount>1</Amount>
                        <Remove style={{cursor:'pointer'}} />
                    </AmountContainer>
                  <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
            
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

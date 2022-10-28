import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcment from "../Component/Announcment"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import { mobile } from "../Responsive"


 const Container = styled.div``
 const Wrapper = styled.div`
  padding:20px;
  ${mobile({padding:'10px'})};
 `
 const Title = styled.h1`
  font-weight:300;
  text-align:center;
 `
 const Top = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
 `
 const TopButton = styled.button`
  padding:10px;
  font-weight:600;
  cursor:pointer;
  border:${props => props.type === "filled" && "none"};
  background-color:${props => props.type === "filled" ? "black" : "transparent"};
  color:${props => props.type === "filled" && "white"};

 `
 const TopTexts = styled.div`
 ${mobile({display:'none'})};
 `
 const TopText = styled.span`
  text-decoration:underline;
  margin:0px 10px;
  cursor:pointer;

  &:hover{
    color:teal;
  }
 `


 const Bottom = styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({flexDirection:'column'})};
 `
 const Info = styled.div`
  flex:3;
 `
 const Product = styled.div`
  display:flex;
  justify-content:space-between;
  margin:40px 0;
  ${mobile({flexDirection:'column'})};
 `
 const ProductDetail = styled.div`
  flex:2;
  display:flex;
 `
 const Image = styled.img`
  width:250px;
  height:250px;
  object-fit:cover;
  ${mobile({width:'225px'})};
 `
 const Details = styled.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
 `
 const ProductName = styled.div``
 const ProductId = styled.span``
 const ProductColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props => props.color}
 `
 const ProductSize = styled.span``
 const PriceDetail = styled.span`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  ${mobile({margin:'20px 0'})};
 `
 const PriceAmountContainer = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;
 `
 const ProductAmount = styled.div`
 font-size:24px;
 margin:5px;
 ${mobile({margin:'5px 15px'})};
 `
 const ProductPrice = styled.div`
  font-size:30px;
  font-weight:200;
 `
 const Hr = styled.hr`
  border:none;
  height:1px;
  background-color:rgba(0,0,0,0.2);
 `

 const Summery = styled.div`
  flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:60vh;
 `
 const SummeryTitle = styled.h1`
  font-weight:200;
 `
 const SummeryItem = styled.div`
  margin:30px 0;
  display:flex;
  justify-content:space-between;
  font-weight:${props => props.type === "total" && "500"};
  font-size:${props => props.type === "total" && "24px"};
 `
 const SummeryItemText = styled.span``
 const SummeryItemPrice = styled.span``
 const Button = styled.button`
  width:100%;
  padding:10px;
  background-color:black;
  color:white;
  font-weight:600:
 `

export default function Cart() {
  return (
    <Container>
        <Navbar/>
        <Announcment/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                 <Product>
                    <ProductDetail>
                            <Image src='/shoes1.jpg' />
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>Id: </b> 384395830584</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size: </b> 37.4 </ProductSize>
                            </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <PriceAmountContainer>
                            <Add style={{cursor:'pointer'}} />
                            <ProductAmount>2</ProductAmount>
                            <Remove style={{cursor:'pointer'}} />
                        </PriceAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                 </Product>
                 <Hr/>
                 <Product>
                    <ProductDetail>
                            <Image src='/t-shirt.png' />
                            <Details>
                                <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                <ProductId><b>Id: </b> 384395830584</ProductId>
                                <ProductColor color="gray" />
                                <ProductSize><b>Size: </b> M </ProductSize>
                            </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <PriceAmountContainer>
                            <Add style={{cursor:'pointer'}}/>
                            <ProductAmount>2</ProductAmount>
                            <Remove style={{cursor:'pointer'}}/>
                        </PriceAmountContainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                 </Product>
                 <Hr/>
                 <Product>
                    <ProductDetail>
                            <Image src='/pants.jpg' />
                            <Details>
                                <ProductName><b>Product:</b> CANVA PANTS</ProductName>
                                <ProductId><b>Id: </b> 384395830584</ProductId>
                                <ProductColor color="blue" />
                                <ProductColor color="black" />
                                <ProductSize><b>Size: </b> M L XL</ProductSize>
                            </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <PriceAmountContainer>
                            <Add style={{cursor:'pointer'}}/>
                            <ProductAmount>2</ProductAmount>
                            <Remove style={{cursor:'pointer'}}/>
                        </PriceAmountContainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                 </Product>
                </Info>
                <Summery>
                    <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                    <SummeryItem>
                        <SummeryItemText>Subtotl</SummeryItemText>
                        <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummeryItemPrice>$ 5.90</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Shipping Discount</SummeryItemText>
                        <SummeryItemPrice>$ -5.90</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem type="total">
                        <SummeryItemText>Total</SummeryItemText>
                        <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summery>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

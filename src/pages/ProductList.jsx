import styled from "styled-components"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import Announcment from "../Component/Announcment"
import Products from "../Component/Products"
import NewsLetter from "../Component/NewsLetter"
import { mobile } from "../Responsive"

 const Container = styled.div`
 `;
 const Title = styled.h1`
   padding:20px;
 `;
 const FilterContainer = styled.div`
   display:flex;
   justify-content:space-between;
   padding:10px 25px;
 `;
 const Fillter= styled.div`
   display:flex;
   align-items:center;
   margin:20px;
   ${mobile({display:'flex',flexDirection:'column',margin:'0 auto'})};
 `;
 const FilterText = styled.h6`
  font-size:20px;
  font-weight:600;
  margin-right:20px;
  ${mobile({marginRight:'0px'})};
  
 `;
 const Select = styled.select`
  padding:10px;
  margin-right:20px;
  border:1px solid teal;
  border-radius:3px;
  color:teal;
  outline-color:teal;
  cursor:pointer;
  font-weight:500;
  ${mobile({margin:'10px 0px',width:'100%'})};
 `;

 const Option = styled.option`
 display:block;
  padding:5px;
  cursor:pointer;
 `;




export default function ProductList() {
  return (
    <Container>
        <Navbar />
        <Announcment />
        <Title>Dresses</Title>
        <FilterContainer>
            <Fillter>
                <FilterText>Filter products: </FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Yellow</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Pink</Option>
                </Select>
                <Select>
                <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>MS</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>

            </Fillter>
            <Fillter>
               <FilterText>Sort Products:</FilterText>
               <Select>
                <Option disabled selected>Newest</Option>
                 <Option>Price (asc)</Option>
                 <Option>Price (disc)</Option>
               </Select>
                
            </Fillter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

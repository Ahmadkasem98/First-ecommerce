import styled from "styled-components"
import { Catagories } from "../data"
import CategorieItem from "./CategorieItem"
import { mobile } from '../Responsive';

 const Container = styled.div`
   display:flex;
   padding:20px;
   margin-bottom:80px;
   ${mobile({flexDirection:"column",padding:'0',marginTop:'50px'})};
 `

export default function Categories() {
  return (
    <Container>
       
       {Catagories.map((item) => (
        <CategorieItem item={item} key={item.id} />
       ))}
        
    </Container>
  )
}

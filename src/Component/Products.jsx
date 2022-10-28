import styled from "styled-components"
import { ProductItems } from "../data"
import Product from "./Product"

  const Container = styled.div`
    display:flex;
    gap:20px;
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:30px;
  `

export default function Products() {
  return (
    <Container>
        {ProductItems.map((item) => (
            <Product item={item} key={item.id} />
        ))}
        
    </Container>
  )
}

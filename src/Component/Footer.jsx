import { Facebook, Instagram, Mail, Phone, PhoneOutlined, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../Responsive"

 const Container = styled.div`
   display:flex;
   background-color:teal;
   color:white;
   ${mobile({flexDirection:'column'})};
 `
 const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  padding:20px;

 `
 const Logo = styled.h1``
 const Desc = styled.p`
  margin:20px 0 ;
 `
 const SocialContainer = styled.div`
  display:flex;
 `
 const SocialIcon = styled.div`
 width:40px;
 height:40px;
 border-radius:50%;
 color:white;
 background-color: ${props => props.color} ;
 display:flex;
 justify-content:center;
 align-items:center;
 margin-right:20px;
 cursor:pointer;
 `

 const Center = styled.div`
 flex:1;
 padding:20px;
 ${mobile({display:'none'})};
 `
 const Title = styled.h1`
  margin-bottom:30px;
 `
 const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
 `
 const ListItem = styled.li`
  width:50%;
  margin-bottom:10px;
  cursor:pointer;
  transition:all 0.3s ease;

 &:hover {
  transform:scale(1.01,1.01);
 }
 `

 const Right = styled.div`
 flex:1;
 padding:20px;
 `
 const ContactItem = styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;
 `;
 const Payment = styled.img`
  width:80%;
  height:90px;
 `
;

export default function Footer() {
  return (
    <Container>
        <Left>
          <Logo>KASEM.</Logo>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis deserunt, culpa repellat similique perferendis modi amet ullam ipsum animi provident, ratione rem atque, velit quae nam facere commodi vitae.</Desc>
          <SocialContainer>
            <SocialIcon color="#3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="#E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="#55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="#E60023">
                <Pinterest />
            </SocialIcon>
            
          </SocialContainer>       
        </Left>

        <Center>
           <Title>Useful Links</Title>
           <List>
             <ListItem>Home</ListItem>
             <ListItem>Cart</ListItem>
             <ListItem>Man Fashion</ListItem>
             <ListItem>Women Fashion</ListItem>
             <ListItem>Accessories</ListItem>
             <ListItem>My Account</ListItem>
             <ListItem>Order Tracking</ListItem>
             <ListItem>Wishlist</ListItem>
             <ListItem>Wishlist</ListItem>
             <ListItem>Terms</ListItem>
           </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
               <Room style={{marginRight:'10px'}}/> 622 Dixie Path , south Topinchester 98336
            </ContactItem>
            <ContactItem>
             <Mail style={{marginRight:'10px'}}/> +1 234 567 89
            </ContactItem>
            <ContactItem>
              <PhoneOutlined style={{marginRight:'10px'}}/> Contact@kasem98.com
            </ContactItem>
            <Payment src='/footer.webp' alt='' />
            
        </Right>
    </Container>
  )
}

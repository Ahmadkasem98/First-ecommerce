import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from '../Responsive';
 
const Container = styled.div`
 height:60vh;
 display:flex;
 flex-direction:column;
 background-color:#fcf5f5;
 justify-content:center;
 align-items:center;
`
const Title = styled.h1`
 font-size:70px;
 margin-bottom:20px;
`
const Desc = styled.div`
 font-size:28px;
 font-weight:300;
 margin-bottom:20px;
 ${mobile({textAlign:'center'})};
`
const InputContainer = styled.div`
 width:50%;
 height:50px;
 display:flex;
 justify-content:space-between;
 border:1px solid lightgray;
 margin-top:20px;
 ${mobile({width:'70%'})};
`
const Input = styled.input`
  flex:8;
  border:none;
  outline:none;
  padding-left:20px;
  font-size:15px;
`
const Button = styled.button`
 flex:1;
 background-color:teal;
 border:none;
 cursor:pointer;
 color:white;
 ${mobile({padding:'5px 14px'})};
`

export default function NewsLetter() {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Det timely updates from your favorite products.</Desc>
        <InputContainer>
          <Input placeholder='Enter your Email' />
          <Button>
            <Send />
          </Button>
        </InputContainer>
        
    </Container>
  )
}

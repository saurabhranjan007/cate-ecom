import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

 
const Container = styled.div`
    height: 60vh;
    background-color:#F5EDC8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px; 
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    width: 100%;
    padding-left: 40px;
`;

const Button = styled.button`
    border: 0.5px solid gray;
    width: 10%;
    cursor: pointer;
    background-color: #B0E0A8;
    color: white;
`;

export const Newsletter = () => {
  return (

    <Container>
        <Title>Newsletter</Title>
        <Description>Amet aliqua laboris minim commodo dolor.</Description>
        <InputContainer>
            <Input placeholder='Enter your email address..' />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

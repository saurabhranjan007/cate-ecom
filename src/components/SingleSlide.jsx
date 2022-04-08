import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ${'' /* margin-top: 20px; */}
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #B4B3E9;
  
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;

`;

const Image = styled.img`
  width: 80%;
`;

const InfoContainer = styled.h1`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const SingleSlide = () => {
  return (
    <Container>
      <Wrapper>

        <ImgContainer>
            <Image src='https://pngimg.com/uploads/cat/cat_PNG50533.png'/>
        </ImgContainer>

        <InfoContainer>

            <Title>CAT FANCIERS'</Title>
            <Desc>Aute minim ea fugiat veniam proident eiusmod sunt et ea reprehenderit ad occaecat.</Desc>

            {/* Redirecting the button to an external link.. */}
            <a target="_blank" href="https://cfa.org/"><Button>KNOW MORE</Button></a>
            
        </InfoContainer>

      </Wrapper>
    </Container>
  );
}

export default SingleSlide;

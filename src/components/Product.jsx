import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: gray;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgb(0,0,0,0.2);
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DFECF9;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;


const Icon = styled.div`
    ${'' /* width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white; */}
    color: white;
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;
    cursor: pointer;

    &:hover{
        ${'' /* background-color: #DFECF9; */}
        transform: scale(1.5);
    }
`; 
 
export const Product = ({item}) => {
  return (

    <Container>

        <Circle />

        <Image src={item.img} />

        <Info>

            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>

            <Icon>
                <InfoIcon />
            </Icon>

            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
    </Container>
  )
}

import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


// The Navbar is divided into three main parts LEFT, CENTER & RIGHT. 

// Styling the MAIN COMPONENTS of the Navbar
const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// Styling the LEFT SIDE of the Navbar
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

// Styling the CENTER SIDE of the Navbar
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

// Styling the RIGHT SIDE of the Navbar
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItems = styled.li`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    list-style-type: none;
`;


function Navbar(props) {

  return (

    <Container>
        <Wrapper>

            {/* LEFT SIDE OF THE NAVBAR */}
            <Left>
                {/* Here Language is written as EN/LI i.e., English - Lorem Ipsum */}
                <Language>EN/LI</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon style={{color: "gray", fontSize: "16px"}} />
                </SearchContainer>
            </Left>

            {/* CENTER SIDE OF THE NAVBAR */}
            <Center>
                <Logo>
                    {/* Rendering the Logo thro Link so it becomes clickable and redirects to the Home Route */}
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>CATE.</Link>
                </Logo>
            </Center>

            {/* RIGHT SIDE OF THE NAVBAR */}
            <Right>
                <MenuItems>
                    {/* Rendering this Registered component thro Link so it redirects to the /register Route  */}
                    <Link to="/register" style={{textDecoration: "none", color: "black"}}>REGISTER</Link>
                </MenuItems>

                <MenuItems>
                    {/* Rendering this Login component thro Link so it redirects to the /login Route  */}
                    <Link to="/login" style={{textDecoration: "none", color: "black"}}>LOG IN</Link>
                </MenuItems>
                
                <MenuItems>
                    <Badge badgeContent={2} color="primary"> 
                        <ShoppingCartOutlinedIcon /> 
                    </Badge>
                </MenuItems>
            </Right>
            

        </Wrapper>
    </Container>
  )
}

export default Navbar

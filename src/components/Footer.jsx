import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


// The Footer component has three content in three section, LEFT, CENTER & RIGHT. 
//  LEFT - will contain the company Logo, description/tagline and the links to social handles. 
// CENTER - will contain some useful links to navigate to the webiste 
//  RIGHT - will contain the address and a representtion of payment option for purchases.. 

const Container = styled.div`
    display: flex;
`;

// Styling the Left side of the container.. 
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-size: 40px;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcons = styled.div`
    color: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    background-color: #${props=>props.color}
`;

// Styling the Center side of the container.. 
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

// Styling the Right side of the container.. 
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const TitleRight = styled.h3`
    margin-bottom: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 60%;
`;


export default function Footer() {
  return (

    <Container>
        {/* Designing the Left side of the Footer.. */}
        <Left>
            <Logo>CATE.</Logo>
            <Desc>Mollit eu laboris occaecat amet aliquip sunt. Duis do laboris est culpa irure. Velit est do consequat nostrud duis pariatur.</Desc>
            <SocialContainer>

                <SocialIcons color='FAF5E6'>
                    {/* <FacebookIcon /> */}
                    <a target="_blank" href="https://www.facebook.com/"><FacebookIcon color='primary' /></a>
                </SocialIcons>

                <SocialIcons color='FFFBDB'>
                <a target="_blank" href="https://www.instagram.com/"><InstagramIcon color='primary' /></a>
                </SocialIcons>

                <SocialIcons color='FAF5E6'>
                <a target="_blank" href="https://www.twitter.com/"><TwitterIcon color='primary'/></a>
                </SocialIcons>

                <SocialIcons color='FFFBDB'>
                <a target="_blank" href="https://www.linkedin.com/"><LinkedInIcon color='primary'/></a>
                </SocialIcons>

            </SocialContainer>
        </Left>

        {/* Designing the Center side of the Footer.. */}
        {/* When clicked these links will redirect the user to certain part of the page fo easy navigation */}
        {/* Here these are not active links, since I didn't have that much of links to redirect and I had to maintain an even design and it was sort of getting in the way..so. */}
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>One</ListItem>
                <ListItem>Two</ListItem>
                <ListItem>Three</ListItem>
                <ListItem>Four</ListItem>
                <ListItem>Five</ListItem>
                <ListItem>Six</ListItem>
                <ListItem>Seven</ListItem>
                <ListItem>Eight</ListItem>
                <ListItem>Nine</ListItem>
                <ListItem>Ten</ListItem>
            </List>
        </Center>

        {/* Designing the Right side of the Footer.. */}
        <Right>

            <TitleRight>Contact</TitleRight>

            <ContactItem>
                <LocationOnIcon style={{marginRight: '20px'}} /> Sector - 2, Noida - 201301
            </ContactItem>

            <ContactItem>
                <CallIcon style={{marginRight: '20px'}} /> +91-000000000000
            </ContactItem>

            <ContactItem>
                <AlternateEmailIcon style={{marginRight: '20px'}} /> support@cate.com
            </ContactItem>

            {/* This is the Payments tab, which shows that the company accepts these sort of paymnet options for the purchases made. */}
            <Payment src="https://www.transparentpng.com/download/payment-method/KWM0Hm-payment-method-bitcoin-photo.png" />

        </Right>
    </Container>

  )
}

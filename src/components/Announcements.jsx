import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ADFCA4;
    font-size: 15px;
    font-weight: 400;
`;

const Announcements = () => {
  return (

    // This will go above the Navbar, and it will display the announcements or the offer that the company is having.. 
    <Container>
        Meow Meow Meow. Don't Worry, They Understand. Now avail 50% off on the most ingenious pet products on the planet. 
    </Container>
  )
}

export default Announcements
// import React, { useState } from 'react'
// import styled from 'styled-components';
// import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
// import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
// import { SliderItems } from './data';

// const Container = styled.div`
//     display: flex;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     margin-top: 20px;
//     overflow: hidden;
// `;

// const Wrapper = styled.div`
//     height: 100%;
//     display: flex;
//     ${'' /* Since X-axis affects the width of the viewport and Y-axis affects the height of the viewport.. */}
//     ${'' /* Here I'm running the transform at X-axis since we are to move the slides horizontally and that means the X-axis(if we consider the viewport as a quadrant) */}
//     ${'' /* -100vw :  means the  */}
//     transition: all 1.5s ease;
//     transform: translateX(${(props)=>props.slideIndex * (-100)}vw);
//     ${'' /* transform: translateX(100vh); */}
// `;

// const Slide = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     ${'' /* background-color: #${props=>props.bg} */}
//     background-color: #C8BCDF;
// `;

// const ImgContainer = styled.div`
//     flex: 1;  
//     height: 100%;  
// `;

// const Image = styled.img`
//     height: 80%;
// `;

// const InfoContainer = styled.div`
//     flex: 1;
//     padding: 50px;
// `;

// const Title = styled.h1`
//     font-size: 70px;
// `;

// const Desc = styled.p`
//     margin: 50px 0px;
//     font-size: 20px;
//     font-weight: 500;
//     letter-spacing: 3px;
// `;

// const Button = styled.button`
//     padding: 10px;
//     font-size: 20px;
//     background-color: transparent;
//     cursor: pointer;
// `;

// const Arrow = styled.div`
//     width: 50px;
//     height: 50px;
//     background-color: #EDF6F9;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     ${'' /* putting the ternary condition here to check for the direction of the arrow and setting the position accordingly.. */}
//     left: ${props => props.direction === "left" && "10px"};
//     right: ${props => props.direction === "right" && "10px"};
//     margin: auto;
//     cursor: pointer;
//     opacity: 0.5;
//     z-index: 2;
// `;

// // // Adding dots to the current slide.. 
// // const settings = {
// //     dots: true,
// //     arrows: true,
// //     infinite: false,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     initialSlide: 1,
// //     speed: 500,
// //     appendDots: dots => {
// //       return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
// //     };



// function Slider() {

//     // here I'm going to use the SliderItems array, so the first element will be at position 0. So we start from there.. 
//     const [slideIndex, setSlideIndex] = useState(0);
//     console.log(slideIndex);

//     // Defining the handleClick for the direction, so that it could add the back and forward functionality to the arrows of the slidder.. 
//     const handleClick = (direction) => {
        
//         // suppose if the current display slide is the first one (meaning the index for the slide is 0), 
//         // and when we click on the forward arrow button the index value of the slide will change to 1 and it will start displaying the second slide and so on 
//         // but when it go to the third slide and we click the forward button again then it will set the index value to be zero (0) meaning the first slide. 
//         // Since we only have three slides here.. 

//         // Similary when we encounter the left/back arrow. If the first slide is in display then the index value is set at zero but when we click on the back 
//         // arrow button then the it will start displaying the third slide setting the index value to be 2. 

//         // Defining the arrow functionality for slides.. 
//         if(direction==="left"){
//             // If the slide index is greater than zero meaning there is/are slides in the left panel and by clicking the 
//             // back arrow button it will reduce the slide index value by 1, so it will start displaying the previous slide.
//             // In another scenario when it is not then clicking the back arrow button will set the slide to display the slide 
//             // which is at slide index 2 meaning the right most one. 
//             setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
//         } else { 
//             // so if the current slide index is less than two meaning there is/are another slides in the right side. 
//             // So by clicking the button, the slide index will get increase by 1 meaning the next slide will display.
//             // Otherwise the slide index will get set to 0, which in turn will display the first slide. 
//             setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
//         }; 
//     }

//   return (
//     <Container>

//             {/* Left side of the arrow in the slider component */}
//             <Arrow direction="left" onClick={()=>handleClick("left")} >
//                 <ArrowLeftOutlinedIcon />
//             </Arrow>

//             <Wrapper slideIndex={slideIndex}>

//                 mapping the SliderItems array to pass the data dynamically..
//                 {SliderItems.map((item) =>
//                     <Slide 
//                         key={item.id}
//                         bg={item.bg}>
//                     <ImgContainer>
//                         <Image src={item.img} />
//                     </ImgContainer>
//                     <InfoContainer>
//                         <Title>{item.title}</Title>
//                         <Desc>{item.desc}</Desc>
//                         <Button>SHOP NOW</Button>
//                     </InfoContainer>
//                 </Slide>
//                 )}
                

//                 {/* Second slidder of the Homepage..
//                 <Slide bg="#978ADE">
//                     <ImgContainer>
//                         <Image src='https://pngimg.com/uploads/cat/cat_PNG50533.png' />
//                     </ImgContainer>
//                     <InfoContainer>
//                         <Title>WINTER SALE</Title>
//                         <Desc>Dolor velit esse sint et ad enim mollit tempor aute ullamco quis.</Desc>
//                         <Button>SHOP NOW</Button>
//                     </InfoContainer>
//                 </Slide> */}

//                 {/* Third slidder of the Homepage..
//                 <Slide bg="#D9BAA7">
//                     <ImgContainer>
//                         <Image src='https://pngimg.com/uploads/cat/cat_PNG50533.png' />
//                     </ImgContainer>
//                     <InfoContainer>
//                         <Title>POPULAR SALE</Title>
//                         <Desc>Dolor velit esse sint et ad enim mollit tempor aute ullamco quis.</Desc>
//                         <Button>SHOP NOW</Button>
//                     </InfoContainer>
//                 </Slide> */}

//             </Wrapper>

//             {/* Right side arrow in the slidder component */}
//             <Arrow direction="right" onClick={()=>handleClick("right")}>
//                 <ArrowRightOutlinedIcon />  
//             </Arrow>

//     </Container>
//   )
// }

// export default Slider
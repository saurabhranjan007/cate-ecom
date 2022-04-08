// import React from 'react';
// import { SearchOutlined } from '@mui/icons-material';
// import Badge from '@mui/material/Badge';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';    


// // Styling the MAIN Navbar

// const containerStyles = {
//     height: "60px",
//     marginBottom: "20px",
// };

// const wrapperStyles = {
//     padding: "10px 20px", 
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
// };

// // Styling the LEFT SIDE components of the Navbar

// const leftStyle = {
//     flex: "1",  
//     display: "flex",  
//     alignItems: "center",
// };

// const language = {
//     fontSize: "14px",
// };

// const searchContainer = {
//     border: "0.5px solid lightgray",
//     display: "flex",
//     alignItems: "center",
//     marginLeft: "25px",
//     padding: "5px",
//     placeholder: "Search",
// };

// const inputStyle = {
//     border: "none",
// };

// // Styling the CENTER SIDE side components of the Navbar

// const centerStyle = {
//     flex: "1",
//     textAlign: "center",
// };

// const logoStyle = {
//     fontWeight: "bold",
// };


// // Styling the RIGHT SIDE components of the Navbar

// const rightStyle = {
//     flex: "1",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// };

// const menuStyles = {
//         fontSize: "14px",
//         cursor: "pointer",
//         margin: "20px",
// };


// const Navbar = () => {

//     <div style={containerStyles}>
//         <div style={wrapperStyles}>

//             {/* Left Side */}
//             <div style={leftStyle}>
//             <div style={language}>EN/LI</div>
//                  <div style={searchContainer}>
//                      <input style={inputStyle}/>
//                      <SearchOutlined style={{color: "gray", fontSize: 16}}/>
//                  </div>
//             </div>

//             {/* Center Side */}
//             <div style={centerStyle}>
//                 <h1 style={logoStyle}>CATE.</h1>
//             </div>

//             {/* Right Side */}
//             <div style={rightStyle}>
//                 <div style={menuStyles}>REGISTER</div>
//                 <div style={menuStyles}>LOG IN</div>

//                 <div style={menuStyles}>
//                     <Badge badgeContent={2} color="primary"> <ShoppingCartOutlinedIcon /> </Badge>
//                 </div>
//             </div>

//         </div>
//     </div>
// }

// export default Navbar;

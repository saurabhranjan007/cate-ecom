import React from 'react'
import { Categories } from '../components/Categories';
import Footer from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';
import SingleSlide from '../components/SingleSlide';

function Home(){
    return(
        <div>
            <SingleSlide />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}
 
export default Home;
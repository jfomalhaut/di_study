import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import HeroTitle from './HeroTitle';
import Languages from './Languages';



import {
    HeroContainer


} from './HeroElements';



const Hero = () => {

    const [showModal, setShowModal] = useState(false);


    return (
        <HeroContainer>
            <Languages showModal={showModal} setShowModal={setShowModal} />
            <Navbar showModal={showModal} setShowModal={setShowModal} />
            <SearchBar />
            <HeroTitle />


        </HeroContainer>
    )
}

export default Hero;

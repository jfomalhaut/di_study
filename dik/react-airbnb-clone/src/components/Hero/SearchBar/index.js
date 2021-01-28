import React, { useState, useEffect } from 'react';
import {
    SearchContainer,
    SearchBox,
    SearchIcon,
    SearchContents

} from './SearchBarElements';

import { FiSearch } from 'react-icons/fi';


const SearchBar = () => {

    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = (ev) => {
        setScrollTop(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <>
            <SearchContainer scrollTop={scrollTop}>
                <SearchBox>
                    <SearchContents>
                        <div className="searchInput">
                            <span>Location</span>
                            <input type="text" placeholder="Where are you going?"></input>
                        </div>
                        <div className="searchInput">
                            <span>Check in</span>
                            <input type="date" placeholder="Add dates"></input>
                        </div>
                        <div className="searchInput">
                            <span>Check out</span>
                            <input type="date" placeholder="Add dates"></input>
                        </div>
                        <div className="searchInput">
                            <span>Guests</span>
                            <input type="number" placeholder="Add guests"></input>
                        </div>
                        <SearchIcon>
                            <FiSearch />
                        </SearchIcon>
                    </SearchContents>
                </SearchBox>
            </SearchContainer>

        </>
    )
}

export default SearchBar

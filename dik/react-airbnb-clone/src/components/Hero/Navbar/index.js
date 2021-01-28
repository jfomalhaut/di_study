import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import {
    Nav,
    NavIcon,
    NavChoicesShow,
    NavChoices,
    NavSearchShow,
    SearchIcon,
    SearchBoxS,
    NavSelection,
    NavProfile,
    User,
    NavHost,
    Logo,
    Globe,
    HamburgerMenu,
    UserCircle,
    UserMenu,
    UserDropdownContents


} from './NavbarElements';

import { DropdownData } from './DropdownData';



const Navbar = ({ setShowModal }) => {

    const [dropdown, setDropdown] = useState(false);
    const showDropdown = () => setDropdown(!dropdown);

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

    const [searchbar, setSearchbar] = useState(false);
    const showSearchBar = () => setSearchbar(!searchbar);



    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <Nav scrollTop={scrollTop}>
                <div className="navTop">
                    <NavIcon scrollTop={scrollTop}>
                        <Link>
                            <Logo />
                            <p>airbnb</p>
                        </Link>
                    </NavIcon>
                    <NavChoicesShow scrollTop={scrollTop}>
                        <NavChoices>
                            <Link>
                                <NavSelection>Places to stay</NavSelection>
                            </Link>
                            <Link>
                                <NavSelection>Experiences</NavSelection>
                            </Link>
                            <Link>
                                <NavSelection>Online Experiences</NavSelection>
                            </Link>
                        </NavChoices>
                    </NavChoicesShow>
                    <NavSearchShow scrollTop={scrollTop}>
                        <SearchBoxS onClick={showSearchBar}>
                            <p>Start Your Search</p>
                            <SearchIcon>
                                <FiSearch />
                            </SearchIcon>
                        </SearchBoxS>
                    </NavSearchShow>

                    <NavProfile scrollTop={scrollTop} >
                        <Link>
                            <NavHost>Become a host</NavHost>
                        </Link>
                        <Globe scrollTop={scrollTop} onClick={openModal} />
                        <UserMenu>
                            <User onClick={showDropdown}>
                                <HamburgerMenu />
                                <UserCircle />
                            </User>
                            <div className={dropdown ? 'close' : 'show'}>
                                <UserDropdownContents>
                                    <div className="signLog">
                                        <li><Link>Sign Up</Link></li>
                                        <li><Link>Log in</Link></li>
                                    </div>
                                    {DropdownData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link>
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </UserDropdownContents>
                            </div>
                        </UserMenu>
                    </NavProfile>
                </div>

                <div className={searchbar ? 'closeSearch' : 'showSearch'}>
                    <SearchBar />
                </div>
            </Nav>
        </>




    )
}

export default Navbar

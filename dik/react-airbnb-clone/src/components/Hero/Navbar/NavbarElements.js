import styled from 'styled-components';

import { FaAirbnb } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';



export const Nav = styled.div`
   
    display: flex;
    flex-direction: column;
    background-color: ${props => props.scrollTop > 0 ? 'white' : 'transparent'};
    width: 100%;
    height: 80px;
    padding: 0 80px;
    position: fixed;
    z-index: 6;

    .navTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;

    }
    
    
    .closeSearch {
        display: none;

    }

    .showSearch {
        display: block;
    }


}
`;



export const NavIcon = styled.div`
    display: flex;
    font-size: 1.6rem;
    
    a {
        display: flex;
        text-decoration: none;
        color:  ${props => props.scrollTop > 0 ? '#FF385C' : 'white'};
    }

    p {
        margin-left: 5px;
   
    }


`;

export const Logo = styled(FaAirbnb)`

`;

export const NavChoicesShow = styled.div`
    display: ${props => props.scrollTop > 0 ? 'none' : 'block'};

`;

export const NavSearchShow = styled.div`
    display: ${props => props.scrollTop > 0 ? 'block' : 'none'};
    justify-content: center;
    align-items: center;
`;

export const SearchBoxS = styled.div`
    width: 270px;
    height: 37px;
    padding: 0 10px;
    border: 1px solid gray;
    background-color: white;
    border-radius: 30px;
    display: flex;
    margin-left: 90px;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    cursor: pointer;
`;

export const SearchIcon = styled.div`
    padding: 5px;
    border-radius: 50%;
    background-color: #FF385C;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const NavChoices = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 150px;

    

    a{
        text-decoration: none;
        color: white;
        font-size: 0.9rem;
        
    }

`;

export const NavSelection = styled.div`
    margin: 0 20px;
   
`;

export const NavProfile = styled.div`
    display: flex;
    align-items: center;
    
    a {
        text-decoration: none;
        color: ${props => props.scrollTop > 0 ? 'black' : 'white'};
        font-size: 0.9rem;
    }


`;


export const NavHost = styled.div`
   padding-right: 10px;
`;

export const UserMenu = styled.div`
      

    .close {
        display: none;
    }

    .show {
        display: block;
    }

`;


export const User = styled.div`
    display: flex;
    background-color: white;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid gray;

`;

export const Globe = styled(FiGlobe)`
    padding-right: 10px;
    font-size: 1.7rem;
    color: ${props => props.scrollTop > 0 ? 'black' : 'white'};
    cursor: pointer;

`;
export const HamburgerMenu = styled(GiHamburgerMenu)`
    color: black;
    margin-right: 5px;

`;
export const UserCircle = styled(FaUserCircle)`
    color: gray;
   

`;

export const UserDropdown = styled.nav`

`;

export const UserDropdownContents = styled.ul`
    border: 1px solid rgba(0, 0, 0, 0.192);
    position: absolute;
    max-width: 220px;
    top: 80%;
    right: 3%;
    display: flex;
    flex-direction: column;
    z-index: 100;
    background-color: white;
    border-radius: 20px;
    text-align: left;
    line-height: 3;  

    .signLog {
        border-bottom: 1px gray solid;
    }  

    li {
        list-style: none;
        padding: 0 30px;
    }

    li:hover {
        background-color:rgba(0, 0, 0, 0.03);
    }

    a {
        color: black;
        text-decoration: none;
    }
`;


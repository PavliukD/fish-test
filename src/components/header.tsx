import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: auto;
`

const StyledNavLink = styled(NavLink)`
    font-size: 20px;
    text-decoration: none;
    border: 2px solid transparent;
    padding: 5px 15px;
    border-radius: 5px;
    :not(:first-child){
        margin-left: 10px;
    }
    &.active{
        text-decoration: underline;
    }
    :hover,
    :focus{
        color: orange;
        border: 2px solid orange;
    }
`

export const Header = () => {
    return(
        <NavList>
            <StyledNavLink to='/'>Products</StyledNavLink>
            <StyledNavLink to='/new-product'>Add product</StyledNavLink>
        </NavList>
    )
}
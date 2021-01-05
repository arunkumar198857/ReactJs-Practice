import React, {useState, useContext} from 'react'
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import {Link} from 'react-router-dom';
import {UserContext, userContext} from '../context/UserContext';

const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-light">G-F-APP</Link></NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : " "
            }</NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ?  (
                            <NavItem>
                                <NavLink tag={Link} to="/" className="text-light">
                                        Log-Out
                                </NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink tag={Link} to="/" className="text-light">
                                        Sign-Up
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/" className="text-light">
                                        Sign-In
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header;
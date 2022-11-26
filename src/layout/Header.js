/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";

import { Link } from "react-router-dom";

import { userContext } from "../context/Context";

import gr2 from "./gr2.png";

const Header = () => {
    const context = useContext(userContext);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggledropdown = () => setIsOpenDropdown(!isOpenDropdown);

    return (
        <div className="sticky-top">
            <Navbar color="success" light expand="md" className=" HeadFootBG">
                <NavbarBrand>
                    <Link
                        to={"/"}
                        className="text-white text-decoration-none ms-2"
                    >
                        {" "}
                        <img src={gr2} width={30} height={30} />
                        GitRepo
                    </Link>
                </NavbarBrand>
                <NavbarText className="text-white">
                    {context.user?.email ? "Hey, " + context.user.email : ""}
                </NavbarText>
                <NavbarToggler onClick={toggle} className=" bg-light" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <Dropdown
                                toggle={toggledropdown}
                                isOpen={isOpenDropdown}
                            >
                                <DropdownToggle
                                    caret
                                    className="bg-transparent border-0 align-text-top ps-0"
                                >
                                    Other Project
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/Random_Quote/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Quote Generator
                                        </a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/Pixi/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Pixi: Image Search App
                                        </a>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/ToDo_App/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Todo App
                                        </a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/TicTacToe_Game/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            TicTacToe Game
                                        </a>
                                    </DropdownItem>

                                    <UncontrolledDropdown direction="right">
                                        <DropdownToggle
                                            caret
                                            className="bg-transparent w-100 text-start border-0 text-dark"
                                        >
                                            Calculator
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <a
                                                    className="text-dark"
                                                    href="https://abhinav0115.github.io/Basic-Calculator/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Basic Calculator
                                                </a>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <a
                                                    className="text-dark"
                                                    href="https://abhinav0115.github.io/BMI-Calculator/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    BMI Calculator
                                                </a>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <a
                                                    className="text-dark"
                                                    href="https://abhinav0115.github.io/Scientific-Calculator/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Scientific Calculator
                                                </a>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/Sorting_Visualizer/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Sorting Visualizer
                                        </a>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/TestYourMemory/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            TestYourMemory
                                        </a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <NavItem className="me-4">
                            <NavLink
                                tag={Link}
                                to="/about"
                                className="text-white"
                            >
                                About
                            </NavLink>
                        </NavItem>
                        {context.user ? (
                            <>
                                {/* <NavItem>
                                    <NavLink
                                        onClick={() => {
                                            context.setUser(null);
                                        }}
                                        className="text-white"
                                    >
                                        Reset Password
                                    </NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink
                                        onClick={() => {
                                            context.setUser(null);
                                        }}
                                        className="text-white"
                                    >
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink
                                        tag={Link}
                                        to="/signup"
                                        className="text-white"
                                    >
                                        Signup
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        tag={Link}
                                        to="/signin"
                                        className="text-white"
                                    >
                                        Login
                                    </NavLink>
                                </NavItem>{" "}
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;

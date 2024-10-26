import React from 'react';
import { Navbar, Nav, Dropdown, Button, Image } from 'react-bootstrap';
import { BsBell, BsSun, BsMoon } from 'react-icons/bs';
import '../styles/components/Header.css';
import { HeaderAction } from '../redux/actions/type';
import { connect } from 'react-redux';

const Header = ({ state, updateState }) => {
    const { isDarkMode } = state;

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        updateState({ isDarkMode: newDarkMode });  
        document.body.classList.toggle('dark-mode', newDarkMode);  
    };

    return (
        <div className="header-container">
            <Navbar expand="lg" className="custom-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto align-items-center">
                        <Dropdown align="end" className="mx-3">
                            <BsBell size={24} />
                        </Dropdown>

                        <Button variant="light" className="toggle-theme-btn toggle-btn" onClick={toggleDarkMode}>
                            {isDarkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

const mapStateToProps = ({ header }) => ({
    state: header.headerState,
});

const mapDispatchToProps = (dispatch) => ({
    updateState: (params) => dispatch(HeaderAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

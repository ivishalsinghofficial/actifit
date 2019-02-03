import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';



class CustomNavbar extends Component {
    render() {
        return (
            <div>
            <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Actifit Tools &beta;</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                      </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                              Home
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="/Feedback" to="/Feedback">
                              Feedback
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} href="/Voting" to="/Voting">
                              Voting
                            </NavItem>
                            <NavItem eventKey={4} componentClass={Link} href="/About" to="/About">
                              About
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}

export default CustomNavbar;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navigation">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="fullLogo">
            <Image className="navbar-logo" src="https://i.ibb.co/6v96jvQ/PTP-Big-Jarn-2-112.png" alt="RAD DAD Logo" fluid />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/milestones">
              <Nav.Link style={{ marginRight: '10px' }}>Milestones</Nav.Link>
            </Link>
            <Link passHref href="/milestone/new">
              <Nav.Link style={{ marginRight: '10px' }}>Create a Milestone</Nav.Link>
            </Link>
            <Link passHref href="/moments">
              <Nav.Link style={{ marginRight: '10px' }}>Moments</Nav.Link>
            </Link>
            <Link passHref href="/moment/new">
              <Nav.Link style={{ marginRight: '10px' }}>Create a Moment</Nav.Link>
            </Link>
            <Link passHref href="/suggested">
              <Nav.Link style={{ marginRight: '10px' }}>Suggested Moments</Nav.Link>
            </Link>
          </Nav>
          <Button type="button" className="btn-danger" id="sign-out-button" style={{ marginLeft: 'auto' }} onClick={signOut}>Sign Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

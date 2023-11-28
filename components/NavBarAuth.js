/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>RAD DAD</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/milestones">
              <Nav.Link>Milestones</Nav.Link>
            </Link>
            <Link passHref href="/milestone/new">
              <Nav.Link>Create a Milestone</Nav.Link>
            </Link>
            <Link passHref href="/moments">
              <Nav.Link>Moments</Nav.Link>
            </Link>
            <Link passHref href="/moment/new">
              <Nav.Link>Create a Moment</Nav.Link>
            </Link>
            <Link passHref href="/suggested">
              <Nav.Link>Suggested Moments</Nav.Link>
            </Link>
            <Button type="button" className="btn-danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

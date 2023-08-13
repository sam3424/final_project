import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from "./logo";

export function NavBarRender(){

    return (
			<div>
				<Logo />
				<Navbar bg='warning' data-bs-theme='dark' fluid>
					<Container fluid>
						<Nav className='me-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
						</Nav>
						<Navbar.Brand href='#home' className='navBard'>
							Fast Shopping
						</Navbar.Brand>
					</Container>
				</Navbar>
			</div>
		)
}

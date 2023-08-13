import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

   


function DropdownMenu() {

    const [selectNumber,setSelectNumber]=useState(null)
    const HandlerSelectNumber=(number)=>{
        setSelectNumber(number)
		
    }

  const renderNumbers = () => {
    
    const numbers = []
    for (let i = 1; i <= 100; i++) {
      numbers.push(<NavDropdown.Item key={i} onClick={()=>  HandlerSelectNumber(i)}>{i}</NavDropdown.Item>)
    }
    return numbers;

  }
 
  return (
		<div>
			<Navbar variant='dark' bg='dark' expand='lg'>
				<Container fluid>
					<Navbar.Brand href='#home'>Qty :</Navbar.Brand>

					<Nav>
						<NavDropdown
							id='nav-dropdown-dark-example'
							title='Select'
							menuVariant='dark'>
							{renderNumbers()}
							<NavDropdown.Divider />
						</NavDropdown>
					</Nav>
				</Container>
			</Navbar>
			{selectNumber && (
				<div>
					console.log(selectNumber)
					<p>Selected quantity:{selectNumber}</p>
					
				</div>
			)}
			
		</div>
	)
}

export default DropdownMenu;
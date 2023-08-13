
import React from "react";
import './addCard.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownMenu from "./dropdown"
import AddCardToast from "./cardToaster"
import { useState } from "react";

function AddCartWithGrid({ closeCard, card,selectNumber }) {
	const [cardToaster, setcardToaster]=useState(false)
		const openToast = () => {
			setcardToaster(true)
		}

  return (
		<Modal show={true} onHide={() => closeCard(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Add to Cart</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='addCard-container'>
					<div className='addCardImg'>
						<img src={card.image} alt='' />
					</div>
					<div className='add-card-title'>
						<h1>
							Enjoy your shopping with Fast Shopping Center
							<h3>Free shipping on all orders</h3>
						</h1>
						<div>
							<DropdownMenu />
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={() => closeCard(false)}>
					Cancel
				</Button>

				<Button className='addButton' onClick={openToast}>
					Add to Cart
				</Button>
			</Modal.Footer>
			{cardToaster && (
				<AddCardToast card={card} selectNumber={selectNumber} closeCard={closeCard} />
			)}
		</Modal>
	)
}

export default AddCartWithGrid;
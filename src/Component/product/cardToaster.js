import {React ,useState}from 'react'
import Toast from 'react-bootstrap/Toast'
import './addCard.css'
import { ShoppingCart } from 'phosphor-react'

export default function AddCardToast({ card, selectNumber }) {
	const [showToaster, setShowToaster] = useState(true)
	const toggleShowToaster = () => setShowToaster(false)
	return (
		<Toast className='Info'>
			<Toast.Header show={showToaster} onClose={toggleShowToaster}>
				<img src={card.image} className='tosterImg' alt='' />
				<ShoppingCart className='add-button' size={32} />
				<div className='priceToaster'>{card.price}</div>

				<strong>Added to the card successfully.</strong>
			</Toast.Header>
			<Toast.Body className='titleInfo'>
				<br></br>
				<br></br>
				Free shipping on all orders.
				<p>Selected quantity: {selectNumber}</p>
			</Toast.Body>
		</Toast>
	)
}

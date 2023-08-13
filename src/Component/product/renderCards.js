import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './CardContainer.css'
import AddCartWithGrid from './addCard'

export default function RenderCard({ card }) {
	const [showFullDescription, setShowFullDescription] = useState(false)
	const [openCard, setOpenCard]=useState(false)

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription)
	}

	return (
		<Router>
			{' '}
			<motion.div className='carousel'>
				<motion.div
					animate={{ x: 1, opacity: 10, rotate: 360 }}
					drag='x'
					className='inner-carousel'
					whileHover={{
						scale: 1.2,
					}}
					whileTap={{
						scale: 0.8,
					}}>
					<motion.div className='item'>
						<img src={card.image} alt='' />
					</motion.div>
				</motion.div>
			</motion.div>
			<div className='description'>
				{showFullDescription
					? card.description
					: `${card.description.slice(0, 120)}...`}
				{!showFullDescription && (
					<button className='read-more-button' onClick={toggleDescription}>
						Read More
					</button>
				)}
			</div>
			<div className='price'>{card.price}</div>
			<Link to='cart'>
				{/* <ShoppingCart className='add-button' size={32} /> */}
				<button
					className='add-card'
					onClick={() => {
						setOpenCard(true)
					}}>
					<ShoppingCart size={32} />
					
				</button>
				{/* conditional rendering technique in React */}
				{/* holds a boolean value (either true or false). */}
				{openCard && <AddCartWithGrid closeCard={setOpenCard} card={card}  />}
			</Link>
		</Router>
	)
}
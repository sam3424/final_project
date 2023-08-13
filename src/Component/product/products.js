import React, { useEffect, useState } from 'react'
import { NavBarRender } from '../Navagation/navBar'
import RenderCard from './renderCards'
import { motion } from 'framer-motion'


import './CardContainer.css'

function ProductData() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => setProducts(data))
	}, [])

	return (
		<div>
			<NavBarRender />
			<main className='card-container'>
				<div className='carousel'>
					<div className='inner-carousel'>
						{products.slice(0, 10).map((product) => (
							<motion.div key={product.id} className='item'>
								<RenderCard card={product} />
								
							</motion.div>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
export default ProductData

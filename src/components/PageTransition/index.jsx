import React, { useEffect, useRef } from "react"

import { Container } from "./styles"
import { TweenMax } from "gsap/dist/gsap"
const PageTransition = () => {
	const hidden = useRef(null)

	useEffect(
		(
			e
		) => {
			TweenMax.to(
				hidden.current,
				0.8,
				{
					delay: 2,
					ease: "power3.out",
					y: 64,

					height: "0vh",
					stagger: {
						amount: 0.16,
					},
				}
			)
		},
		[
			hidden,
		]
	)
	return (
		<Container
			ref={
				hidden
			}
		>
			<div className='container'>
				<h1>
					home
				</h1>
			</div>
		</Container>
	)
}

export default PageTransition

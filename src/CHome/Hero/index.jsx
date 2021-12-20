import { useEffect, useRef, useCallback } from "react"

import { TweenMax, Expo } from "gsap/dist/gsap"
import { Container } from "./styles"

const Hero = () => {
	const Link1 = useRef(null)
	const Link2 = useRef(null)
	const Link3 = useRef(null)
	const Link4 = useRef(null)
	const Link5 = useRef(null)

	const callEffect = useCallback(() => {
		// nav animation

		;[
			Link1.current,
			Link2.current,
			Link3.current,
			Link4.current,
			Link5.current,
		].forEach(
			(
				element,
				i
			) => {
				TweenMax.staggerFrom(
					element,
					1,
					{
						delay: 0.4,

						y:
							10 *
							i,
						opacity: 0,
						ease: Expo.easeInOut,
					},
					0.2
				)
			}
		)
	}, [Link1, Link2, Link3, Link4, Link5])
	useEffect(() => {
		callEffect()
	}, [callEffect])

	return (
		<Container>
			<div className='cover'></div>
			<div
				className='container-fluid'
				ref={
					Link1
				}
			>
				<div className='container'>
					<header>
						<div className='row'>
							<div className='col-lg-3'></div>
							<div className='col-lg-6'>
								<p
									style={{
										marginBottom: "20px",
									}}
									ref={
										Link2
									}
								></p>
							</div>
							<div className='col-lg-3'></div>
						</div>
						<h1
							className='line anim-typewriter justify-content-center'
							ref={
								Link3
							}
						>
							Sound
							Line
							|
							Som
							e
							iluminação
						</h1>
						<br />
						<div className='row'>
							<div className='col-lg-3'></div>
							<div className='col-lg-6'>
								<p
									ref={
										Link4
									}
								>
									•Locação
									de
									som,
									luz
									em
									geral
									para
									seu
									evento
									•Casamentos,
									15
									anos,
									bodas,
									etc..
									•Confraternizações
									com
									os
									melhores
									DJs
									da
									região
								</p>
							</div>
							<div className='col-lg-3'></div>
						</div>
					</header>

					<div
						className='scroll-down'
						ref={
							Link5
						}
					></div>
				</div>
			</div>
		</Container>
	)
}

export default Hero

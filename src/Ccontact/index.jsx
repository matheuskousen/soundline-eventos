import { TweenMax, Expo } from "gsap/dist/gsap"
import { useRef, useEffect, useState } from "react"
import { Container } from "./styles"
import { TextField, Button } from "@material-ui/core"
const Ccontact = () => {
	// Animation all links
	const Link1 = useRef(null)
	const Link2 = useRef(null)
	const Link3 = useRef(null)
	const Link4 = useRef(null)
	const Link5 = useRef(null)

	const links = [
		Link1,
		Link2,
		Link3,
		Link4,
		Link5,
	]
	useEffect(() => {
		// nav animation

		links.forEach(
			(
				element,
				i
			) => {
				TweenMax.staggerFrom(
					element.current,
					1,
					{
						delay:
							0.2 *
							i,
						y: 3,

						opacity: 0,
						ease: Expo.easeInOut,
					},
					0.1
				)
			}
		)
	}, [])
	return (
		<Container>
			<div className='whitespace'></div>

			<div className='container'>
				<div className='hero-content'>
					<br />
					<br />

					<div className='row'>
						<div className='col-lg-8'>
							<h3
								className='wow fadeInUp'
								ref={
									Link1
								}
							>
								diga
								olá
								👋
							</h3>
							<br />
							<p
								className='wow fadeInUp'
								ref={
									Link2
								}
							>
								Quer
								conhecer
								sobre
								nossos
								produtos
								orçamentos
								?.
								Nossa
								é
								equipe
								está
								preparados
								para
								lhe
								atender
								com
								um
								atendimento
								eficiênte
								e
								com
								carisma.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='whitespace'></div>
			<br />
			<br />
			<br />
			<br />
			<div className='container form'>
				<div className='row'>
					<div className='col-lg-4 '>
						<span>
							01
						</span>
						<br />
						<br />
						<br />
						<br />
						<h3>
							Email
						</h3>
						<p>
							soundline@gamil.com
						</p>
					</div>
					<div className='col-lg-4'>
						<span>
							03
						</span>
						<br />
						<br />
						<br />
						<br />
						<h3>
							Instagram
						</h3>
						<a
							target={
								"_blank"
							}
							href='https://www.instagram.com/sound_line_eventos/'
						>
							Seguir
						</a>
					</div>
					<div className='col-lg-4'>
						<span>
							03
						</span>
						<br />
						<br />
						<br />
						<br />
						<h3>
							Whatsapp⬇️
						</h3>

						<a
							target={
								"_blank"
							}
							href='bit.ly/WhatsappSoundLine2'
						>
							Saiba
							mais
						</a>
					</div>
				</div>
			</div>

			<div className='whitespace'></div>
		</Container>
	)
}

export default Ccontact

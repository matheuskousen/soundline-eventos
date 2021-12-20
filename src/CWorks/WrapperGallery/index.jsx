import React from "react"
import FilesImages from "../database/Images"

import { TweenMax, Expo } from "gsap/dist/gsap"
import { useRef, useEffect, useState } from "react"
import { Container } from "./styles"
import Columns from "./Columns"

const WrapperGallery = () => {
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
						ease:
							Expo.easeInOut,
					},
					0.1
				)
			}
		)
	}, [])
	return (
		<Container>
			<div className='container-fluid'>
				<header className='jumbotron'>
					<div className='whitespace'></div>
					<div className='container title-info'>
						<div className='row'>
							<div className='col-lg-6'>
								<h1
									className='display-4'
									ref={
										Link1
									}
								>
									Trabalhos
								</h1>
							</div>

							<div className='col-lg-3'></div>
							<div className='col-lg-3'></div>
						</div>
					</div>
					<div className='container text-info'>
						<div className='row'>
							<div className='col-lg-3 col-arrow'>
								<div className='whitespace'></div>

								<br />
								<br />
								<br />
								<br />

								<div className='whitespace'></div>
								<h1
									className='arrowdown'
									ref={
										Link5
									}
								>
									↓
								</h1>
							</div>
							<br />
							<br />
							<div className='col-lg-3'></div>
							<div className='col-lg-6'>
								<p
									className='lead'
									ref={
										Link2
									}
								>
									As
									boas
									praticas
									é
									uma
									coisa
									fundamental
									para
									nossos
								</p>
								<p
									className='lead'
									ref={
										Link3
									}
								>
									trabalhos
									para
									da
									mais
									acessibilidade
									para
									nossos
								</p>
								<p
									className='lead'
									ref={
										Link4
									}
								>
									clientes
									e
									seus
									convidados.
								</p>
							</div>
						</div>
					</div>
				</header>
				<br />
				<hr />
				<div className='container wrapper-gallery'>
					<>
						<Columns
							file={
								"/assets/festas/debutantes/geovana/card3.jpeg"
							}
							goTo={
								"/"
							}
							titleName={
								"GIOVANNA SABINO"
							}
							Cols='col-lg-6 order-0'
							noSpace={
								"nospace"
							}
							Cols1='col-lg-6 order-1'
						/>
					</>
				</div>
			</div>
		</Container>
	)
}

export default WrapperGallery

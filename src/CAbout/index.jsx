import React, { useEffect, useRef } from "react"

import { gsap, TweenMax, Expo } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import { Container } from "./styles"

const CAbout = () => {
	const Link1 = useRef(null)
	const Link2 = useRef(null)
	const Link3 = useRef(null)

	const links = [Link1, Link2, Link3]
	useEffect(() => {
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
							0.1 *
							i,
						y:
							3 *
							i,
						opacity: 0,
						ease: Expo.easeInOut,
					},
					0.1
				)
			}
		)
	}, [links])
	return (
		<Container>
			<div
				className='container'
				ref={
					Link1
				}
			>
				<div className='row'>
					<div
						className='col-lg-12 about image wow fadeInUp'
						ref={
							Link2
						}
					></div>
				</div>
			</div>
			<div className='container'>
				<div className='hero-content'>
					<br />
					<br />

					<div
						className='row'
						ref={
							Link3
						}
					>
						<div className='col-lg-12'>
							<h3 className='wow fadeInUp '>
								sobre
								mim.
							</h3>
							<br />

							<p className='wow fadeInUp'>
								{" "}
								Sound
								Line
								proporciona
								a
								tranquilidade
								que
								você
								precisa
								na
								realização
								do
								seu
								evento,
								tendo
								como
								principal
								característica,
								a
								experiência,
								pontualidade
								e
								compromisso
								para
								com
								o
								mesmo.
							</p>

							<p className='wow fadeInUp'>
								{" "}
								Com
								profissionais
								que
								já
								atuam
								há
								mais
								de
								10
								anos
								no
								mercado
								de
								entretenimento,
								com
								experiência
								em
								festas
								e
								eventos
								em
								geral,
								podemos
								lhe
								oferecer
								novidades,
								ideias
								e
								a
								melhor
								logística
								para
								sucesso
								do
								seu
								evento.
							</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />{" "}
			<br />
			<br />{" "}
			<br />
			<br />
		</Container>
	)
}

export default CAbout

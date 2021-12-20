import Link from "next/link"

import { Container } from "./styles"

import React, { useRef, useEffect } from "react"
import { TweenMax, Expo } from "gsap/dist/gsap"
const ProdutosPage = ({
	isNameProject,
	isNameService,
	isInfo,
	iSTitle,
	isInfo1,
	isImage,
	isImage1,
	isNext,
	isPrev,
}) => {
	// Animation all links
	const Link1 = useRef(null)
	const Link2 = useRef(null)
	const Link3 = useRef(null)
	const Link4 = useRef(null)
	const Link5 = useRef(null)
	const Link6 = useRef(null)

	const links = [
		Link1,
		Link2,
		Link3,
		Link4,
		Link5,
		Link6,
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
			<div className='container'>
				<div className='hero-content'>
					<br />
					<br />
					<div className='row'>
						<div className='col-lg-12'>
							<br />

							<h1
								className='wow fadeInUp'
								ref={
									Link1
								}
							>
								{
									isNameProject
								}
							</h1>
							<br />
							<br />

							<div className='row'>
								<div className='col-lg-4'>
									<p
										className='wow fadeInUp'
										ref={
											Link2
										}
									>
										serviço:
									</p>
									<h6
										className='wow fadeInUp'
										ref={
											Link3
										}
									>
										{
											isNameService
										}
									</h6>
								</div>
							</div>
							<br />
							<br />
							<br />
							<p
								className='wow fadeInUp'
								ref={
									Link4
								}
							>
								{
									isInfo
								}
							</p>
							<br />
							<hr />
							<br />
							{
								iSTitle
							}
							<br />

							{
								isInfo1
							}
						</div>
					</div>
				</div>
			</div>

			<div className='project-img'>
				<div className='container'>
					<br />
					<br />
					<div className='row'>
						<div className='col-md-8'>
							<div
								ref={
									Link5
								}
								className='project image wow fadeInUp'
								style={{
									backgroundImage: `url(${isImage})`,
									backgroundPositionY: "70%",
								}}
							></div>
						</div>
						<div className='col-md-4'>
							<div
								ref={
									Link6
								}
								className='project image wow fadeInUp'
								style={{
									backgroundImage: `url(${isImage1})`,
									backgroundPositionX: "50%",
								}}
							></div>
						</div>
					</div>
				</div>
			</div>

			<br />
			<br />

			<div className='project-nav'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 prev'>
							<Link
								href={
									isPrev
								}
							>
								<p>
									<ion-icon name='arrow-back'></ion-icon>
									previous
								</p>
							</Link>
						</div>
						<div className='col-lg-6 next'>
							<Link
								href={
									isNext
								}
							>
								<p>
									next
									<ion-icon name='arrow-forward'></ion-icon>
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='whitespace'></div>
		</Container>
	)
}

export default ProdutosPage

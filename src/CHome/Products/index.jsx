import React, { useRef, useEffect } from "react"
import { TweenMax, Expo } from "gsap/dist/gsap"
import Link from "next/link"
import { Container } from "./styles"
import Image from "next/image"

import som from "../../../public/assets/gallery/07.jpg"
import estruturas from "../../../public/assets/gallery/27.jpg"
import globos from "../../../public/assets/gallery/19.jpg"
import iluminacao from "../../../public/assets/gallery/26.jpg"
import pista from "../../../public/assets/gallery/33.jpg"

const Products = ({ isData }) => {
	const Link1 = useRef(null)
	const Link2 = useRef(null)

	const produtosItems = [
		{
			id: 0,
			productName: "SISTEMA DE SOM",
			pageHref: "/produtos/sistemadesom",
			productImage: som,
		},

		{
			id: 1,
			productName: "Estruturas de Aluminio",
			pageHref: "/produtos/estruturas",
			productImage: estruturas,
		},

		{
			id: 2,
			productName: "Globo Espelhado",
			pageHref: "/produtos/globes",
			productImage: globos,
		},

		{
			id: 3,
			productName: "Iluminações",
			pageHref: "/produtos/lightings",
			productImage: iluminacao,
		},

		{
			id: 4,
			productName: "Pista de led & espelhadas",
			pageHref: "/produtos/pistadeled",
			productImage: pista,
		},
	]

	const links = [Link1, Link2]
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
							0.4 *
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
			<br />
			<br />
			<br />
			<header>
				<h2
					ref={
						Link2
					}
				>
					{
						isData
					}
				</h2>
				<div className='whitespace'></div>

				<div
					className='vertical'
					ref={
						Link1
					}
				></div>
			</header>
			<br />

			<div className='whitespace'></div>
			<div className='whitespace'></div>

			<div className='whitespace'></div>

			<section className='container  production-container'>
				{produtosItems.map(
					(
						element
					) => (
						<ul
							className={`row row-${element.id}`}
							key={
								element.id
							}
						>
							<li className='col-lg-6 col-img'>
								<Image
									src={
										element.productImage
									}
									alt={
										element.productName
									}
								></Image>
							</li>

							<li className='col-lg-6 col-info'>
								<h3>
									{
										element.productName
									}
								</h3>

								<Link
									href={
										element.pageHref
									}
								>
									veja
									mais
									➤
								</Link>
							</li>
						</ul>
					)
				)}
			</section>
		</Container>
	)
}

export default Products

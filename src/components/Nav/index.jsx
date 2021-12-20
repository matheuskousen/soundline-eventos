import { TweenMax, Expo, gsap } from "gsap/dist/gsap"

import { useRef, useEffect, useState } from "react"
import { Container } from "./styles"
import MenuOptions from "./MenuOptions"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from "next/link"
gsap.registerPlugin(ScrollTrigger)
const Nav = () => {
	// TOGGLE MENU
	const [isToggle, setIsToggle] =
		useState(
			"true"
		)

	function hendleToggle() {
		setIsToggle(
			!isToggle
		)
	}

	// NAv
	const Sticky = useRef(null)
	// Animation all links
	const Link1 = useRef(null)
	const Link2 = useRef(null)
	const Link3 = useRef(null)
	const Link4 = useRef(null)

	const isfixed = useRef(null)
	const Link5 = useRef(null)

	useEffect(() => {
		// nav animation

		if (
			!isfixed >
			900
		) {
			isfixed.current.style.background =
				"red"
		}
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
	}, [
		Link1.current,
		Link2.current,
		Link3.current,
		Link4.current,
		Link5.current,
	])

	return (
		<Container
			ref={
				isfixed
			}
		>
			<span
				className='brand'
				ref={
					Link1
				}
			>
				<Link
					href='/'
					scroll={
						false
					}
				>
					<a
						style={{
							fontFamily: "var(--ave)",
							letterSpacing: "0em",
							marginTop: "0.1em",
						}}
					>
						Sound
						Line
					</a>
				</Link>
			</span>

			<MenuOptions
				isToggle={
					isToggle
				}
				Link2={
					Link2
				}
				Link3={
					Link3
				}
				Link4={
					Link4
				}
				Link5={
					Link5
				}
				hendleToggle={
					hendleToggle
				}
			/>
			<div className='toggle'>
				<div
					className='span'
					onClick={
						hendleToggle
					}
				>
					{isToggle
						? "menu"
						: "close"}
				</div>
			</div>
		</Container>
	)
}

export default Nav

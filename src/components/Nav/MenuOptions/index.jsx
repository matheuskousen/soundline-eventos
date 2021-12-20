import { Links } from "../styles"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../../public/assets/favicon-32x32.png"

const MenuOptions = ({
	isToggle,
	Link2,
	Link3,
	Link4,
	Link5,
	hendleToggle,
}) => {
	const DataLinks = [
		{
			id: 1,
			linkname: "home.",
			to: "/",
			nameref: Link2,
			click: () =>
				alert(
					"hello"
				),
		},

		{
			id: 2,
			linkname: "trabalho.",
			to: "/works",
			nameref: Link3,
			click: () =>
				alert(
					"hello"
				),
		},
		{
			id: 3,
			linkname: "sobre mim.",
			to: "/about",
			nameref: Link4,
			click: () =>
				alert(
					"hello"
				),
		},
		{
			id: 4,
			linkname: "contato.",
			to: "/contact",
			nameref: Link5,
			click: () =>
				alert(
					"hello"
				),
		},
	]
	return (
		<Links
			isToggle={
				isToggle
			}
		>
			<div className='bg-image'></div>
			<div className='navProfile'>
				<Image
					src={
						logo
					}
					alt='logotype soundline'
				/>

				<div className='navProfile_infos'>
					<h3>
						SOUNDLINE
					</h3>
					<h4>
						SOM
						E
						Iluminações
					</h4>
				</div>
			</div>
			{DataLinks.map(
				(
					element,
					i
				) => (
					<li
						key={
							element.id
						}
					>
						<Link
							href={
								element.to
							}
							isToggle={
								isToggle
							}
							delay={
								i *
								1000
							}
						>
							<a
								ref={
									element.nameref
								}
								onClick={
									hendleToggle
								}
							>
								{
									element.linkname
								}
							</a>
						</Link>
					</li>
				)
			)}
		</Links>
	)
}

export default MenuOptions

import Head from "next/head"
import ProdutosPage from "../../../src/components/ProdutosPage"

import Footer from "../../../src/components/Footer"
import AnimationProvider from "../../../hooks/context"
import Nav from "../../../src/components/Nav"

export default function Boates() {
	const valueIsInfo =
		'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
	return (
		<>
			<Head>
				<title>
					{" "}
					Boates.
					|
					Sound
					Line
				</title>
			</Head>
			<div className='wrapper'>
				<Nav />
				<br />
				<br />

				<br />
				<br />
				<br />
				<br />

				<AnimationProvider>
					<ProdutosPage
						isNameProject='Boates.'
						isNameService='Boates.'
						isInfo={
							valueIsInfo
						}
						isImage='/assets/produtos/boate.jpg'
						isImage1='/assets/produtos/boate1.jpg'
						isPrev={
							"/produtos/pistadeled"
						}
						isNext={
							"/produtos/sistemadesom"
						}
					/>
				</AnimationProvider>
				<Footer />
			</div>
		</>
	)
}

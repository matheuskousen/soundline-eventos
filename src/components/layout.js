import Footer from "./Footer"
import Nav from "./Nav"
import Meta from "./meta"
export default function Layout({ Metadescription, titleMeta, children }) {
	return (
		<div className='Wrapper'>
			<Meta
				Title={
					titleMeta
				}
				description={
					Metadescription
				}
			/>
			<Nav />
			<main>
				{
					children
				}
			</main>
			<Footer />
		</div>
	)
}

import Head from "next/head"
import CAbout from "../src/CAbout"

import Footer from "../src/components/Footer"
import Nav from "../src/components/Nav"

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Portfolio
					Website
					|
					Sound
					Line
				</title>
			</Head>
			<div className='Wrapper'>
				<Nav />
				<CAbout />

				<Footer />
			</div>
		</>
	)
}

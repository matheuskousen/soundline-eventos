import Head from "next/head"

import Footer from "../../src/components/Footer"

import Nav from "../../src/components/Nav"
import WrapperGallery from "../../src/CWorks/WrapperGallery"

export default function Works() {
	return (
		<>
			<Head>
				<title>
					Trabalho
					|
					Sound
					Line
				</title>
			</Head>
			<div className='wrapper'>
				<Nav />
				<div className='whitespace'></div>
				<WrapperGallery />
				<div className='whitespace'></div>
				<Footer />
			</div>
		</>
	)
}

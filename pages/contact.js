import Head from "next/head"
import { useCallback, useEffect, useState } from "react"

import Ccontact from "../src/Ccontact/index"
import Footer from "../src/components/Footer"
import Nav from "../src/components/Nav"

export default function Contact() {
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
				<Ccontact />
				<Footer />
			</div>
		</>
	)
}

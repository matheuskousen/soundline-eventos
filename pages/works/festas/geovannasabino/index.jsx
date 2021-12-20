import React from "react"
import Head from "next/head"
import Nav from "../../../../src/components/Nav"
import Festas from "../../../../src/Festas"

const Wrapper = () => {
	return (
		<>
			<Head>
				<title>
					GIOVANNA
					SABINO
					|
					Sound
					Line
				</title>
			</Head>

			<div className='wrapper'>
				<Nav />
				<Festas />
			</div>
		</>
	)
}

export default Wrapper

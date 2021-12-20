import Head from "next/head"
import App from "next/app"
// import { NextSeo } from "next-seo"
import { GlobalStyle } from "../style/style"

export default class MyApp extends App {
	render() {
		const {
			Component,
			pageProps,
		} =
			this
				.props

		return (
			<>
				<GlobalStyle />

				<Component
					{...pageProps}
				/>
			</>
		)
	}
}

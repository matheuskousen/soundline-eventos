import Document, { Html, Head, Main, NextScript } from "next/document"

import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage =
			ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage(
					{
						enhanceApp: (
							App
						) => (
							props
						) =>
							sheet.collectStyles(
								<App
									{...props}
								/>
							),
					}
				)

			const initialProps = await Document.getInitialProps(
				ctx
			)
			return {
				...initialProps,
				styles: (
					<>
						{
							initialProps.styles
						}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang='pt-BR'>
				<Head>
					<meta
						httpEquiv='content-language'
						content='pt-br, en-US, fr'
					/>
					<meta
						httpEquiv='content-type'
						content='text/html; charset=UTF-8'
					/>
					<meta
						name='author'
						content='Sound Line | Som e iluminação'
					/>
					<meta
						name='keywords'
						content='•Locação de som, luz em geral
    para seu evento
    •Casamentos, 15 anos, bodas, etc..
    •Confraternizações com os
    melhores DJs da região'
					/>
					<meta
						name='rating'
						content='general'
					/>
					<meta
						name='robots'
						content='index,follow'
					/>
					<link
						rel='canonical'
						href='/'
					/>
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='Black-translucent'
					/>
					<meta
						name='mobile-web-app-capable'
						content='yes'
					/>
					<meta
						name='theme-color'
						content='#0f0f0f'
					/>
				</Head>
				<body>
					<Main />
					<NextScript>
						<script src='https://unpkg.com/ionicons@5.2.3/dist/ionicons.js'></script>
					</NextScript>
				</body>
			</Html>
		)
	}
}

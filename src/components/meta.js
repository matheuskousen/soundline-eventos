import Head from "next/head"

export default function Meta({ description, Title }) {
	return (
		<Head>
			<title>
				{
					Title
				}

				|
				|
				Sound
				Line
				|
				Som
				e
				iluminação
			</title>

			<meta charset='utf-8' />

			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/favicon/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon/favicon-16x16.png'
			/>
			<link
				rel='manifest'
				href='/favicon/site.webmanifest'
			/>
			<link
				rel='mask-icon'
				href='/favicon/safari-pinned-tab.svg'
				color='#000000'
			/>
			<link
				rel='shortcut icon'
				href='/favicon/favicon.ico'
			/>

			<link
				rel='stylesheet'
				media='screen'
				href='style.css?v=8may2013'
			/>
			<link
				rel='alternate'
				type='application/rss+xml'
				title='RSS'
				href='http://www.csszengarden.com/zengarden.xml'
			/>
			<link
				rel='preconnect'
				href='https://fonts.googleapis.com'
			/>
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossorigin
			/>
			<link
				rel='preconnect'
				href='https://fonts.googleapis.com'
			/>
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossorigin
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600&family=Cormorant+Unicase:wght@300;400;500;600;700&display=swap'
				rel='stylesheet'
			/>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
			<meta
				name='author'
				content='Sound Line | Som e iluminação'
			/>
			<meta
				name='description'
				content={
					description
				}
			/>
			<meta
				name='robots'
				content='all'
			/>

			<meta
				name='theme-color'
				content='#121212'
			/>
		</Head>
	)
}

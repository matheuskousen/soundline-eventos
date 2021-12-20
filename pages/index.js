import Hero from "../src/CHome/Hero"
import Products from "../src/CHome/Products"

import Layout from "../src/components/layout"

export default function Home() {
	return (
		<>
			<Layout
				titleMeta='Home'
				Metadescription='•Locação de som, luz em geral para seu evento •Casamentos, 15 anos, bodas, etc.. •Confraternizações com os melhores DJs da região'
			>
				<Hero />

				<Products isData='produtos' />
			</Layout>
		</>
	)
}

import ProdutosPage from "../../../src/components/ProdutosPage"

import Layout from "../../../src/components/layout"

export default function Globes() {
	const valueIsInfo =
		'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
	return (
		<Layout
			titleMeta='Pista
					de
					Led
					|
					Sound
					Line'
		>
			<ProdutosPage
				isNameProject='Pista de Led.'
				isNameService='Pista de Led.'
				isInfo={
					valueIsInfo
				}
				isImage='/assets/produtos/pista1.jpg'
				isImage1='/assets/produtos/pista.jpg'
				isPrev={
					"/produtos/estruturas"
				}
				isNext={
					"/produtos/boates"
				}
			/>
		</Layout>
	)
}

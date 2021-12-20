import ProdutosPage from "../../../src/components/ProdutosPage"

import Layout from "../../../src/components/layout"

export default function SystemSound() {
	const valueIsInfo =
		'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
	return (
		<Layout
			titleMeta='Sistema
					de
					som
					|
					Sound
					Line'
		>
			<ProdutosPage
				isNameProject='Sistema de som'
				isNameService='sistema de som.'
				isInfo={
					valueIsInfo
				}
				isImage='/assets/produtos/som.jpg'
				isImage1='/assets/produtos/som1.jpg'
				isPrev={
					"/produtos/boates"
				}
				isNext={
					"/produtos/lightings"
				}
			/>
		</Layout>
	)
}

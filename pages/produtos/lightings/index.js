import ProdutosPage from "../../../src/components/ProdutosPage"

import Layout from "../../../src/components/layout"

export default function lightings() {
	const valueIsInfo =
		'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
	return (
		// Sistema
		// 			de
		// 			Iluminações
		// 			|
		// 			Sound
		// 			Line

		<Layout
			titleMeta='
					Sistema
					de
					Iluminações
					|
					Sound
					Line'
		>
			<ProdutosPage
				isNameProject='Sistema de Iluminações'
				isNameService='Sistema de Iluminações.'
				isInfo={
					valueIsInfo
				}
				isImage='/assets/produtos/iluminacao.jpg'
				isImage1='/assets/produtos/iluminacao1.jpg'
				isPrev={
					"/produtos/sistemadesom"
				}
				isNext={
					"/produtos/globes"
				}
			/>
		</Layout>
	)
}

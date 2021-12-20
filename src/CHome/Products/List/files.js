import somImage0 from "../../../../public/assets/produtos/som.jpg"
import somImage1 from "../../../../public/assets/produtos/som1.jpg"

import ilumiImage0 from "../../../../public/assets/produtos/iluminacao.jpg"
import ilumiImage1 from "../../../../public/assets/produtos/som1.jpg"

import globosImage0 from "../../../../public/assets/produtos/globos.jpg"
import globosImage1 from "../../../../public/assets/produtos/globos1.jpg"

import estruturasImage0 from "../../../../public/assets/produtos/estruturas.jpg"
import estruturasImage1 from "../../../../public/assets/produtos/estruturas1.jpg"

import pistaImage0 from "../../../../public/assets/produtos/pista.jpg"
import pistaImage1 from "../../../../public/assets/produtos/pista1.jpg"

import boateImage0 from "../../../../public/assets/produtos/boate.jpg"
import boateImage1 from "../../../../public/assets/produtos/boate1.jpg"

const ProductInfomations = [
	{
		id: 1,
		srcImg: somImage0,
		srcImg1: somImage1,
		info: "Sistema de som completo e totalmente profissional para qualquer porte de evento ou festas com o melhor atendimento da cidade.",
		produtcName: "sistema de som.",
		goPage: "/produtos/sistemadesom",
	},
	{
		id: 2,
		srcImg: ilumiImage0,
		produtcName: "sistema de iluminações.",
		srcImg1: ilumiImage1,
		info: "Sistema de iluminações totalmente profissional com atendimento para qualquer evento, festas, iluminações de palco para bandas, conferência.",
		goPage: "/produtos/lightings",
	},
	{
		id: 3,
		srcImg: globosImage0,
		srcImg1: globosImage1,
		produtcName: "Globos.",
		info: "O design com o globos espelhados fica ainda mais profissional.",
		goPage: "/produtos/globes",
	},
	{
		id: 4,
		srcImg: estruturasImage0,
		srcImg1: estruturasImage1,
		info: "Trablhadomos com varios tamanho de estruturas box. Ela é uma estruturas de aluminio que com atendimento para decorações, boates para djs,bandas, eventos em geral.",
		produtcName: "estruturas & box.",
		goPage: "/produtos/estruturas",
	},
	{
		id: 5,
		srcImg: pistaImage0,
		srcImg1: pistaImage1,
		produtcName: "Pista de Led.",
		info: "A pista de led e pista espelhadas um otimo componente que vai deixa  a decoraçõe do seu evento ainda mais bonito.",
		goPage: "/produtos/pistadeled",
	},
	{
		id: 6,
		srcImg: boateImage0,
		srcImg1: boateImage1,
		produtcName: "Produto Completo.",
		info: "Para Eventos e Festas temos um produto completo, com globos, pista de led e espelhadas, som, dj estruturas box, fumaça, e iuminações.",
		goPage: "/produtos/boates",
	},
]

export default ProductInfomations

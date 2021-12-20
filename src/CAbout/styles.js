import styled from "styled-components"

export const Container = styled.div`
	@media (max-width: 900px) {
		padding: 0
			20px;
	}
	.about {
		height: 500px;
		margin-top: 120px;
		p {
			font-family: serif !important;
		}
	}

	.col-lg-12 {
		font-family: serif !important;
		@media (min-width: 768px) {
			padding: 0
				100px;
		}
		h3 {
			text-transform: uppercase;
			letter-spacing: 4px;
			margin-top: 32px;
		}
		p {
			font-family: sans-serif !important;
			margin-top: 30px;
		}
	}

	.image {
		background: url("/assets/gallery/dilla/07.jpeg")
			no-repeat
			50%
			70%;
		background-size: cover;
		opacity: 0.8;
	}
`

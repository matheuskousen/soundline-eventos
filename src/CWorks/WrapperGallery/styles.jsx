import styled, { keyframes } from "styled-components"

const animeArrow = keyframes`

0%{
margin-top: -40px;
	opacity:0;
	
}

50%{
	margin-top: 40px;
	
	opacity:1;
}


100%{
	margin-top:-40px;
	
	opacity:0;
}

`
export const Container = styled.div`
	.container-fluid {
		.jumbotron {
			border-radius: 0 !important;
			background: var(
				--dark
			);

			.col-arrow {
				position: relative;
				display: grid;
				place-items: center;
			}
			h1.display-4,
			p {
				color: var(
					--light
				) !important;
			}

			h1 {
				font-size: 72px;
			}

			h1.arrowdown {
				color: red;
				margin-top: 0;
				font-size: 52px;
				animation-delay: 1s;
				animation: 4s
					${animeArrow}
					cubic-bezier(
						0.19,
						1,
						0.22,
						1
					)
					infinite;
				position: absolute;
			}
			p {
				margin-top: 32px;
				font-size: 16px;
				font-weight: 500;
				line-height: 0px;
				font-family: sans-serif !important;
			}
		}

		/* wrapper-gallery */
		.wrapper-gallery {
			width: 100%;

			> .row {
				.col-lg-4 {
					padding: 0 !important;
					margin: 0 !important;
					padding-left: 5px !important;
					padding-right: 5px !important;
				}
				.card {
					display: block;

					background: transparent;
				}

				.card-body {
					padding-top: 10px;
					padding-bottom: 0px;
					padding-left: 0px;
					padding-right: 0;

					.card-title {
						padding: 0;
						margin: 0;
						margin-left: 10px;
						margin-top: 10px;
					}

					.btn {
						margin-top: 10px;
						background: #2e4a85;
						color: var(
							--light
						);
						text-transform: lowercase;
						font-family: monospace !important;
						margin-left: 10px;

						&:hover {
							filter: drop-shadow(
								0em
									0em
									0.5em
									#c7d7fa
							);
						}
					}
				}
			}
		}
	}
`

import styled from "styled-components"

export const Container = styled.section`
	position: relative;
	z-index: 1;
	.container {
		.row {
			.col-lg-8,
			.col-lg-4 {
				padding: 0
					70px;
				img {
					width: 100%;
				}
				h3 {
					font-size: 71.55555px;

					@media (max-width: 900px) {
						font-size: 32px;
					}
				}

				h4 {
					font-family: monospace !important;
					@media (max-width: 900px) {
						font-size: 23px;
					}
				}

				p {
					font-family: sans-serif !important;
					padding-top: 10px;
				}
			}

			.col-lg-4 {
				margin-top: 48px;
			}
			.col-lg-8 {
				position: relative;
				.slider {
					position: relative;
					width: 100%;
					display: flex;
					justify-content: center;
				}
			}
		}
	}
`

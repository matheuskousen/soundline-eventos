import styled from "styled-components"

export const Container = styled.section`
	position: relative;
	z-index: 999;
	.container {
		.row {
			h2 {
				@media (max-width: 900px) {
					white-space: pre-line;
					text-align: center;
				}
			}
			p {
				text-align: center;
				font-family: monospace !important;
				font-size: 16px;
				margin-bottom: 24px;

				@media (max-width: 900px) {
					margin: 24px
						0;
					line-height: 42px;
				}
			}
			padding: 20px
				0;
			img {
				width: 300px;
				height: 400px;
				object-fit: cover;

				@media (max-width: 900px) {
					width: 100%;
				}
			}
			.col-lg-6 {
				display: grid;
				place-items: center;
				@media (max-width: 789px) {
					padding-top: 30px;
				}
			}
			.col-content {
				width: 100%;
			}
		}
	}
`

// export const Img = styled.div`
// 	width: 100%;
// 	height: 200px;
// 	background: ${({ isSrc }) =>
// 		`url(${isSrc}) no-repeat 50% 75%`};
// 	background-size: 100%;

// 	@media (min-width: 1024px) {
// 		height: 300px;
// 	}
// `

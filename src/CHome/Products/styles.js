import styled from "styled-components"

export const Container = styled.article`
	position: relative;

	@media (max-width: 900px) {
		margin-top: 0px;
	}
	padding: 0 20px;
	.whitespace {
		width: 100%;
		height: 100px;
	}

	@media (max-width: 768px) {
		.whitespace {
			display: none;
		}
	}
	h2 {
		text-align: center;
		font-size: 32px;
		font-family: var(
			--cormo
		) !important;
		text-transform: uppercase;
		letter-spacing: 2px;
		@media (max-width: 900px) {
			font-size: 32px;
			letter-spacing: 5px;
			padding: 20px
				0;
		}
	}

	.vertical {
		margin-top: 40px;
		border-left: 1px
			solid
			#fff;

		height: 80px;
		position: absolute;
		left: 50%;
	}

	.row .title-product {
		text-align: center;
		place-items: center;
		display: grid;
		font-size: 24px;
		cursor: pointer;

		font-weight: bolder;

		&:hover {
			text-decoration: line-through;
		}
	}

	.production-container {
		.row-1,
		.row-3 {
			li.col-img {
				order: 1;
				@media (max-width: 972px) {
					order: 0;
				}
				@media (max-width: 768px) {
					order: 0;
				}
			}
		}
		.row {
			padding: 10px
				0;
			margin: 80px
				0;

			li {
				&.col-img {
					display: flex;

					justify-content: flex-end;
					@media (max-width: 972px) {
						justify-content: flex-start;
					}
					@media (max-width: 768px) {
						padding: 20px
							0;
					}
				}
				img {
					height: 300px;
					width: 500px;
					max-width: 100%;

					object-fit: cover;

					object-position: center
						60%;
					@media (max-width: 972px) {
						width: 100vw;
						object-position: center
							20%;
					}
					@media (max-width: 768px) {
						height: 200px;
					}
				}

				h3 {
					font-size: 32px;
				}
				> a {
					font-size: 15px;
				}

				@media (max-width: 972px) {
					padding: 0;
				}
				@media (max-width: 768px) {
					padding: 20px
						0;
				}
			}
		}

		padding: 10px
			20px;
	}
	@media (max-width: 768px) {
		.project {
			width: 90% !important;
			margin: 14px
				auto;
		}

		.vertical {
			display: none;
		}
	}
`

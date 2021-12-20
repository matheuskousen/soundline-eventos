import styled, { css } from "styled-components"

export const Container = styled.nav`
	width: 100%;

	transition: 0.4s ease-in;

	height: 80px;
	background: var(--dark) !important;
	position: fixed;

	position: relative;

	z-index: 9999;

	@media (max-width: 768px) {
		height: 80px;

		.bg-image {
			background: url("/assets/gallery/dilla/05.jpeg")
				50%
				50%;
			display: none;
			opacity: 0.1;
			width: 100%;
			height: 100vh;
			position: absolute;
			left: 0;
		}
	}
	.container {
		width: 100%;
	}

	.brand {
		float: left;
		display: block;

		margin-left: 82px;

		line-height: 80px;
		font-family: var(
			--ave
		) !important;
		font-weight: bold;
		font-size: 22px;

		@media (max-width: 768px) {
			margin-left: 41px;
			height: 100%;
			line-height: 40px;
			display: grid;
			place-items: center;
			font-family: var(
				--ave
			) !important;
			margin-top: 3px;
		}
	}

	.toggle {
		position: fixed;

		right: 40px;
		top: 38px;

		font-weight: 300;

		width: 30px;
		height: 100%;

		z-index: 99999;

		cursor: pointer;

		transition: all
			0.3s
			ease-out;

		visibility: hidden;

		opacity: 0;

		span {
			position: relative;
			z-index: 99999;
		}
	}

	@media screen and (max-width: 900px) {
		.toggle {
			visibility: visible !important;
			opacity: 1;
			line-height: 0px;
			margin-left: 4px;
			z-index: 1068;
			margin-top: -3px;
		}

		font-family: var(
			--ave
		) !important;
	}
	@media (max-width: 773px) and (max-width: 900px) {
		.toggle {
			visibility: visible !important;
			opacity: 1;
			line-height: 0px;
			margin-left: 4px;
			z-index: 1068;
			margin-top: -3px;
		}

		.brand {
			margin-left: 24px !important;
			font-family: var(
				--ave
			) !important;
		}
	}
	@media (max-width: 768px) {
		.toggle {
			visibility: visible !important;
			opacity: 1;
			line-height: 0px;
			margin-left: 4px;
			z-index: 1068;
			margin-top: 2px;
		}

		.brand {
			margin-left: 24px !important;
			font-family: var(
				--unica
			) !important;
		}
	}
`

export const Links = styled.ul`
	float: left;
	right: 80px;

	position: absolute;

	z-index: 1068;
	.navProfile {
		display: none;
	}
	font-size: 20px;
	margin-top: -6px;
	@media (max-width: 789px) {
		display: flex;
		flex-direction: column;
		position: fixed;
		.navProfile {
			flex: 2;

			display: flex;

			flex-direction: column;

			justify-content: center;

			align-items: center;

			text-align: center;

			div {
				h3 {
					font-size: 2em;

					padding: 8px
						0;
				}

				h4 {
					font-size: 0.8em;
				}
			}
		}
	}

	li {
		flex: 1;
		display: inline-block;
		text-align: center;
		cursor: pointer;

		font-weight: 300;
		margin: 6px
			8px;
		line-height: 80px;
		position: relative;
		transition: all
			0.3s
			ease-out;
		font-family: var(
			--ave
		) !important;

		a {
			text-decoration: none;
			&::after {
				content: "";
				display: block;
				width: 0;
				height: 2px;

				background: var(
					--light
				);
				transition: width
					0.3s;
				margin-top: -30px;
			}

			&:hover::after {
				content: "";
				width: 100%;
				margin-top: -30px;
			}
			&:focus::after {
				content: "";
				width: 100%;
				margin-top: -30px;
			}

			&:active::after {
				content: "";
				width: 100%;
				margin-top: -30px;
			}
		}
	}

	@media (max-width: 900px) {
		display: flex;

		width: 100%;
		left: 0;
		overflow: hidden;
		height: 100vh;
		top: 0;
		bottom: 0;
		flex-direction: column;
		transition: 0.2s
			ease-in;
		justify-content: center;
		align-items: center;

		background: var(
			--dark
		);
		color: #0f0f0f;

		${(
			props
		) =>
			props.isToggle &&
			css`
				width: 0%;
				transition: 0.2s
					ease-out;
			`}

		a {
			color: var(
				--light
			);
			font-size: 30px;
			transition: all
				2s
				ease
				0s;
			margin-left: ${({
				isToggle,
			}) =>
				isToggle
					? "-10px"
					: "0"};
			transition-delay: ${({
				delay,
			}) =>
				`${delay}ms`};
		}
	}
`

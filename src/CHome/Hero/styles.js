import styled, { keyframes } from "styled-components"

// SCROLL DONW EFFECT

const fade_move_down = keyframes`
 0% {
            transform: translate(0, -20px) rotate(45deg);
            opacity: 0;
      }
      50% {
            opacity: 1;
      }
      100% {
            transform: translate(0, 20px) rotate(45deg);
            opacity: 0;
      }


`

export const Container = styled.div`
	position: relative;
	height: 80vh;
	padding: 40px 0;
	.cover {
		position: absolute;

		width: 300px;
		height: 500px;
		opacity: 0.2;
		background: url("/favicon/android-chrome-512x512.png")
			50%
			50%
			no-repeat;
		background-size: contain;
		right: 80px;

		@media (max-width: 768px) {
			left: 50%;
			top: 50%;
			transform: translate(
				-50%,
				-50%
			);
		}
	}

	@media (max-width: 768px) {
		padding: 0px;
	}

	.container > header {
		position: relative;

		@media (max-width: 768px) {
			padding-top: 40px;
		}

		h1 {
			font-family: var(
				--cormo
			) !important;

			font-weight: 700;

			@media (max-width: 768px) {
				font-size: 64px;
			}
		}

		p {
			line-height: 36px;
			font-family: var(
				--animo
			) !important;

			@media (max-width: 768px) {
				font-size: 24px;
				text-align: right;
				letter-spacing: 1px;
			}
		}
	}

	.scroll-down {
		position: absolute;
		left: 50%;
		bottom: 100px;
		display: block;
		text-align: center;
		font-size: 20px;

		z-index: 0;
		text-decoration: none;
		text-shadow: 0;
		width: 13px;
		height: 13px;
		border-bottom: 2px
			solid
			#fff;
		border-right: 2px
			solid
			#fff;
		transform: translate(
				-50%,
				0
			)
			rotate(
				45deg
			);
		animation: ${fade_move_down}
			3s
			cubic-bezier(
				0.19,
				1,
				0.22,
				1
			)
			infinite;

		@media (max-width: 1920px) {
			top: 75vh;
			margin-left: -6px;
		}
	}
`

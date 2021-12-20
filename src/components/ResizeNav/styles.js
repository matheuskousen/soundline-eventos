import styled from "styled-components"

export const Container = styled.div`
	z-index: 1;

	top: 0;

	position: fixed;

	background: #0f0f0f !important;

	width: 100%;

	height: 100%;

	visibility: visible;

	opacity: 0;

	transition: all 1s ease-out;

	.close-btn {
		position: absolute;

		right: 0;
		font-weight: 300;
		z-index: 2;

		cursor: pointer;
		top: -2px;
		line-height: 80px;
		color: red;
	}

	#menu {
		height: 90px;

		position: absolute;

		left: 15%;

		transform: translateX(
			-40%
		);

		text-align: center;

		display: table-cell;

		vertical-align: center;

		@media (max-width: 790px) {
			background: red;
			visibility: visible !important;
		}
	}

	#menu li {
		display: block;
		text-align: center;

		padding: 10px
			0;

		font-size: 50px;

		min-height: 50px;
		font-weight: bold;
		cursor: pointer;

		&:nth-child(1) {
			margin-top: 140px;
		}

		a {
			color: #fff;
		}
	}
	@media (min-width: 768px) {
		visibility: hidden !important;
	}
`

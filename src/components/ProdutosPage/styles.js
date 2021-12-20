import styled from "styled-components"

export const Container = styled.div`
	.project {
		height: 500px;
	}
	.project-img .image {
		background-size: cover;
		@media (max-width: 900px) {
			margin: 1em
				0;
		}
	}

	.col-lg-4 {
		> p {
			font-size: 21px;

			text-transform: uppercase;
		}
	}

	.prev,
	.next p {
		color: grey;
	}

	.prev p {
		text-align: left;
		cursor: pointer;
		cursor: pointer;
		transition: all
			0.4s
			ease-out
			0s;

		&:hover,
		&:focus {
			color: var(
				--light
			);
			text-decoration: line-through;
		}
	}

	.next p {
		text-align: right;
		cursor: pointer;
		@media (max-width: 1000px) {
			margin: -24px
				10px;
		}
		transition: all
			0.4s
			ease-out
			0s;

		&:hover,
		&:focus {
			color: var(
				--light
			);
			text-decoration: line-through;
		}
	}
`

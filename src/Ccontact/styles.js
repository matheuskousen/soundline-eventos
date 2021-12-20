import styled from "styled-components"

export const Container = styled.div`
	color: var(--white) !important;

	.row {
		span {
			font-size: 32px;
			opacity: 0.8;
		}

		.col-lg-4 {
			padding: 16px;
			margin: 0px;
			border-radius: 8px;
			border: solid
				1px
				gray;

			h3 {
				opacity: 0.6;
				font-size: 24px;
			}
			p,
			a {
				margin-top: 12px;
				font-size: 18px;
				opacity: 0.6;
			}
		}
	}
`

import styled from "styled-components"

export const Container = styled.div`
	.container-images {
		width: 95%;
		max-width: 95%;
		margin: 0
			auto;

		.row-images {
			display: grid;

			grid-template-columns: repeat(
				2,
				1fr
			);

			.col-image {
				padding: 20px;
				img {
					width: 100%;
				}
			}
		}
	}
`

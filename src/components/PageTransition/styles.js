import styled from "styled-components"

export const Container = styled.div`
	background: var(--dark);
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: 99999;
	overflow: hidden;
	.container {
		display: grid;
		place-items: center;
		height: 100vh;
		text-align: left;
	}
`

import styled from "styled-components"

export const Container = styled.footer`
	z-index: 999;
	position: relative;
	/*--------------- footer section --------------- */
	.collab {
		text-align: right;
	}

	.collab p {
		font-weight: lighter !important;
		margin-bottom: 20px;
	}

	.hr {
		background: rgba(
			255,
			255,
			255,
			0.2
		);
		height: 1px;
	}

	.info h4 {
		font-size: 18px;
		font-weight: lighter;
	}

	.follow {
		font-size: 14px;
		font-weight: lighter;
		display: flex;

		a {
			font-family: sans-serif !important;
		}
		@media (max-width: 900px) {
			justify-content: center;
		}
		align-items: center;
		/* a {
      margin-left: 5px;
      margin-top: 2px;
    } */
	}

	.info p {
		font-weight: lighter;
		color: var(
			--shadows
		);
	}

	.info li {
		font-weight: lighter;
		color: #fff;
		font-size: 14px;
		padding-left: 20px;
	}

	#fb::before {
		display: inline-block;
		content: "";
		border-radius: 100%;
		height: 4px;
		width: 4px;
		margin-right: 6px;
		background: #3b5998;
	}

	#ig::before {
		display: inline-block;
		content: "";
		border-radius: 100%;
		height: 4px;
		width: 4px;
		margin-right: 6px;
		background: #fcaf45;
	}

	#tw::before {
		display: inline-block;
		content: "";
		border-radius: 100%;
		height: 4px;
		width: 4px;
		margin-right: 6px;
		background: #55acee;
	}

	#yt::before {
		display: inline-block;
		content: "";
		border-radius: 100%;
		height: 4px;
		width: 4px;
		margin-right: 6px;
		background: #c4302b;
	}

	#media,
	#address {
		text-align: right;
	}

	#media ul {
		list-style: none;
	}

	#media ul li {
		display: inline-block;
	}

	@media (max-width: 768px) {
		.collab,
		#personal,
		#media,
		#address {
			text-align: center;
		}

		.info
			ul {
			margin: 0
				0
				0 -22px;
			padding: 0;
		}
	}
`

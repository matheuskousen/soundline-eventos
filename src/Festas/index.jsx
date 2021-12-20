import React from "react"
import Geovanna from "./bases/geovanna"

import { Container } from "./styles"

const Festas = () => {
	return (
		<Container>
			<div className='container-images'>
				<div className='whitespace'></div>
				<br />
				<div className='row-images'>
					{Geovanna.map(
						(
							element
						) => (
							<div
								key={
									element.id
								}
								className='col-image'
							>
								<img
									src={
										element.file
									}
									alt={
										element.alt
									}
								/>
							</div>
						)
					)}
				</div>
			</div>
		</Container>
	)
}

export default Festas

import React from "react"
import Content from "./Content"
import ProductInfomations from "./files"
import { Container } from "./styles"

const List = () => {
	return (
		<Container>
			{ProductInfomations.map(
				(
					element
				) => (
					<Content
						element={
							element
						}
					></Content>
				)
			)}
		</Container>
	)
}

export default List

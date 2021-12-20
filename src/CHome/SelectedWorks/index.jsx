import { Container } from "./styles"
import Link from "next/link"
import { Button } from "@material-ui/core"
const SelectedWorks = () => {
	return (
		<Container>
			<div className='whitespace'></div>
			<br />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<h3>
							Veja
							nossos
							trabalhos.
						</h3>
						<br />
					</div>
					<div className='col-lg-4'></div>
				</div>

				<div className='row'>
					<div className='col-lg-4'>
						<h4>
							Dicação
							e
							amor
						</h4>
						<br />
						<p>
							Com
							dedicação
							damos
							a
							nossos
							clientes
							um
							produto
							de
							qualidade
							e
							amor.
						</p>
						<br />

						<Link href='/works'>
							<Button color='primary'>
								VER
								TRABALHOS
							</Button>
						</Link>
						<br />
						<br />
					</div>
					<br />
					<div className='col-lg-8'></div>
				</div>

				<div className='row'>
					<div className='col-lg-4'>
						<img
							src='/assets/gallery/dilla/07.jpeg'
							alt='dilla location'
						/>

						<p>
							casamentos.
						</p>
					</div>
					<div className='col-lg-4'>
						<img
							src='/assets/gallery/09.jpg'
							alt='imagem casamentos'
						/>
						<p>
							15
							anos.
						</p>
					</div>
					<div className='col-lg-4'>
						<img
							src='/assets/gallery/dilla/01.jpeg'
							alt='imagem casamentos'
						/>
						<p>
							fortmaturas.
						</p>
					</div>
				</div>
			</div>
			<div className='whitespace'></div>
			<div className='whitespace'></div>
		</Container>
	)
}

export default SelectedWorks

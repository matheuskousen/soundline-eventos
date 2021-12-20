import React from "react"

import { Container } from "./styles"

const Footer = () => {
	return (
		<Container>
			<div className='container'>
				<br />
				<br />

				<div className='collab container'>
					<div className='row'>
						<div className='col-lg-12'>
							<p className='wow fadeInUp'>
								Você
								tem
								um
								projeto
								interessante?
								Posso
								te
								ajudar.
							</p>
						</div>
					</div>
				</div>

				<br />

				<div className='hr'>
					<div className='row'></div>
				</div>

				<br />
				<br />

				<div className='info'>
					<div className='row'>
						<div
							className='col-lg-4'
							id='personal'
						>
							<h4 className='wow fadeInUp'>
								conecte-se
								comigo
							</h4>

							<p className='wow fadeInUp follow'>
								ig
								<a href='/'>
									@soundline
								</a>
							</p>
							<br />
							<br />
						</div>

						<div
							className='col-lg-4'
							id='media'
						>
							<h4 className='wow fadeInUp'>
								me
								siga
							</h4>

							<ul>
								<li className='wow fadeInUp'>
									<a
										href='/'
										id='fb'
									>
										fb
									</a>
								</li>
								<li className='wow fadeInUp'>
									<a
										href='/'
										id='ig'
									>
										ig
									</a>
								</li>
								<li className='wow fadeInUp'>
									<a
										href='/'
										id='tw'
									>
										tw
									</a>
								</li>
							</ul>

							<br />
							<br />
						</div>

						<div
							className='col-lg-4'
							id='address'
						>
							<h4 className='wow fadeInUp'>
								diga
								olá
							</h4>
							<p className='wow fadeInUp'>
								soundlineventos.com
							</p>
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</Container>
	)
}

export default Footer

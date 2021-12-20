import Image from "next/image"

const Content = ({ element }) => {
	return (
		<div className='container'>
			<div className='whitespace'></div>
			<div className='whitespace'></div>
			<div className='row'>
				<div className='col-lg-3'></div>
				{
					<div
						className='col-lg-6'
						key={
							element.id
						}
					>
						<h2>
							{
								element.produtcName
							}
							<br />
							<br />
						</h2>

						<p>
							{
								element.info
							}
						</p>
						<br />
						<a
							href={
								element.goPage
							}
							className='btn btn-dark'
						>
							confira
							mais
							sobre
						</a>
						<br />
						<br />
						<br />
						<br />
					</div>
				}
				<br />
			</div>

			<div className='row'>
				{
					<div
						className='col-lg-6 col-img'
						key={
							element.id
						}
					>
						<Image
							src={
								element.srcImg
							}
							alt={
								element.produtcName
							}
						/>
					</div>
				}
				{
					<div
						className='col-lg-6'
						key={
							element.id
						}
					>
						<Image
							src={
								element.srcImg1
							}
							alt={
								element.produtcName
							}
							className='col-content col-img'
						/>
					</div>
				}
			</div>
		</div>
	)
}

export default Content

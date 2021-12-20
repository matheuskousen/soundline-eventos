import React from "react"

const Columns = ({
	file,
	goTo,
	titleName,

	Cols,
	noSpace,
	Cols1,
}) => {
	return (
		<div className='row'>
			<div
				className={
					noSpace
				}
			></div>
			<div
				className={
					noSpace
				}
			></div>
			<div
				className={
					Cols
				}
			>
				<div
					className='card'
					style={{
						width:
							"100%",
					}}
				>
					<img
						src={
							file
						}
						alt='card'
						className='card-img-top'
					/>

					<div className='card-body'>
						<h3 className='card-title'>
							{
								titleName
							}
						</h3>

						<div className='action'>
							<a
								href={
									goTo
								}
								className='btn '
							>
								ver
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className={
					Cols1
				}
			>
				<div
					className='card'
					style={{
						width:
							"100%",
					}}
				>
					<img
						src={
							file
						}
						alt='card'
						className='card-img-top'
					/>

					<div className='card-body'>
						<h3 className='card-title'>
							{
								titleName
							}
						</h3>

						<div className='action'>
							<a
								href={
									goTo
								}
								className='btn'
							>
								ver
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Columns

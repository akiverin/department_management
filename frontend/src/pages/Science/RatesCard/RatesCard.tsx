import './RatesCard.scss'

function RatesCard({ year, rates, rfn, images }: RatesCardProps) {
	return (
		<div className="rates-card">
			<div className="rates-card__info">
				<h2 className="rates-card__title">Показатели</h2>
				<p className="rates-card__subtitle">
					Число научных публикаций в {year}
				</p>
				<ul className="rates-card__list">
					{rates.map(rate => (
						<li className="rates-card__item">
							<p className="rates-card__text">
								{rate.name} –{' '}
								<span className="rates-card__value">{rate.value} ед.</span>
							</p>
						</li>
					))}
				</ul>
				{rfn && (
					<p className="rates-card__subtitle">
						<span className="rates-card__value">{rfn} заявки</span> в РНФ
						(Российский научный фонд)
					</p>
				)}
			</div>
			<div className="rates-card__images">
				<img
					src={images[0]}
					alt="Cover for rates card"
					className="rates-card__cover rates-card__cover--top"
				/>
				<img
					src={images[1]}
					alt="Cover for rates card"
					className="rates-card__cover rates-card__cover--bottom"
				/>
			</div>
		</div>
	)
}

type RatesCardProps = {
	rates: { name: string; value: number }[]
	rfn: number
	year: number
	images: string[]
}

export default RatesCard

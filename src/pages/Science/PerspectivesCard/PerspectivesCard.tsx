import './PerspectivesCard.scss'
import blackTick from '@assets/black-tick.svg'

function PerspectivesCard({ perspectives, image }: PerspectivesCardProps) {
	return (
		<div className="perspectives-card">
			<div className="perspectives-card__info">
				<h2 className="perspectives-card__title">Перспективы развития</h2>
				<ul className="perspectives-card__list">
					{perspectives.map(perspective => (
						<li className="perspectives-card__item">
							<img
								src={blackTick}
								alt="Tick decorate for list perspectives"
								className="perspectives-card__icon"
							/>
							<p className="perspectives-card__text">{perspective}</p>
						</li>
					))}
				</ul>
			</div>
			<img
				src={image}
				alt="Cover for perspectives card"
				className="perspectives-card__cover"
			/>
		</div>
	)
}

type PerspectivesCardProps = {
	perspectives: string[]
	image: string
}

export default PerspectivesCard

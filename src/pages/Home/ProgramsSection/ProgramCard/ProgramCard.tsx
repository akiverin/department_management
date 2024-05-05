// import TheButton from '@/components/TheButton/TheButton'
import TheButton from '@/components/TheButton/TheButton'
import './ProgramCard.css'
import tick from '@assets/tick.svg'

function ProgramCard({ program }: ProgramCardProps) {
	return (
		<div
			className={
				'program-card' +
				(program.level === 'Магистратура' ? ' program-card--magistracy' : '')
			}
		>
			<div className="program-card__badge">
				<p className="program-card__level">{program.level}</p>
			</div>
			<div className="program-card__body">
				<div className="program-card__content">
					<div className="program-card__info">
						<h3 className="program-card__name">{program.name}</h3>
						<p className="program-card__code">
							Код направления: {program.code}
						</p>
						<p className="program-card__desc">{program.desc}</p>
						<div className="program-card__places">
							{program.budget_places && (
								<div className="program-card__place">
									<p className="program-card__num-place">
										{program.budget_places}
									</p>
									<p className="program-card__type-place">
										бюджетных
										<br />
										мест
									</p>
								</div>
							)}
							{program.paid_places && (
								<div className="program-card__place">
									<p className="program-card__num-place">
										{program.paid_places}
									</p>
									<p className="program-card__type-place">
										платных
										<br />
										мест
									</p>
								</div>
							)}
						</div>
					</div>
					<ul className="program-card__disciplines">
						{program.disciplines.map((discipline, index) => (
							<li className="program-card__discipline" key={index}>
								<img
									src={tick}
									alt="Деокративная галочка для списка"
									className="program-card__tick"
								/>
								<p className="program-card__name-discipline">{discipline}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="program-card__action">
					<TheButton to="/programs" full mini dark>
						Подробнее
					</TheButton>
				</div>
			</div>
		</div>
	)
}

type ProgramCardProps = {
	program: {
		id: number
		level: string
		name: string
		code: string
		desc: string
		budget_places?: number
		paid_places?: number
		disciplines: string[]
		link: string
	}
}

export default ProgramCard

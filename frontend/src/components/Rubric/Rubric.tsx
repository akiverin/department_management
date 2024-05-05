import React from 'react'
import './Rubric.css'
import star from '@assets/star.svg'

function Rubric({ children }: RubricProps) {
	return (
		<div className="rubric">
			<img
				src={star}
				alt="Декоративная иконка звездочки"
				className="rubric__star"
				height="20"
				width="20"
			/>
			<p className="rubric__text">{children}</p>
		</div>
	)
}

type RubricProps = {
	children: React.ReactNode
}

export default Rubric

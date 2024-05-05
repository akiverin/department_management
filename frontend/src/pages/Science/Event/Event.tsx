import './Event.scss'

function Event({ name, image, link }: EventProps) {
	return (
		<a
			href={link}
			className="event"
			style={{ backgroundImage: `url(${image})` }}
		>
			<h2 className="event__name">{name}</h2>
		</a>
	)
}

type EventProps = {
	name: string
	image: string
	link: string
}

export default Event

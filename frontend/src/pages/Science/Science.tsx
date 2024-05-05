import './Science.scss'
import Event from './Event/Event'
import RatesCard from './RatesCard/RatesCard'
import PerspectivesCard from './PerspectivesCard/PerspectivesCard'

function Science() {
	const events = [
		{
			id: 0,
			name: 'XV Международная научно-практическая конференция «Управление устойчивым инновационным развитием России» в условиях цифровой трансформации» памяти В.И. Кравцовой',
			image:
				'https://mospolytech.ru/upload/iblock/1c1/%D1%81%D0%BF%D0%B8%D0%BA%D0%B5%D1%80.jpg',
			link: '/'
		},
		{
			id: 1,
			name: 'Международная научно-практическая конференция «Экономика сегодня: глобальные вызовы»',
			image:
				'https://mospolytech.ru/upload/iblock/657/9a8814d5-90a4-4a93-9af1-bbd4540275d1.jpg',
			link: '/'
		},
		{
			id: 2,
			name: 'Международная научно-практическая конференция "Экономика новой реальности: вызовы и возможности"',
			image: 'https://tehnowar.ru/uploads/posts/2022-03/38361_full.jpeg',
			link: '/'
		},
		{
			id: 3,
			name: 'Международная научно-практическая конференция "Современные тенденции и перспективы развития социально-экономических систем в условиях трансформации экономики"',
			image: 'https://mospolytech.ru/upload/iblock/66c/231A8776.jpg',
			link: '/'
		},
		{
			id: 4,
			name: 'IV Международный внешнеэкономический научно-практический форум: Вызовы и решения для бизнеса: синергия компетенций',
			image: 'https://ingushetia.ru/upload/iblock/1c0/img_5736.jpg',
			link: '/'
		},
		{
			id: 5,
			name: 'Международная научно-практическая конференция молодых учёных и специалистов по устойчивому развитию, инвестициям и финансовым рискам "Финатлон форум"',
			image: 'https://mospolytech.ru/upload/medialibrary/fdb/BJ4A4471.JPG',
			link: '/'
		},
		{
			id: 6,
			name: 'LXXIII открытая международная студенческая научная конференция Московского Политеха',
			image: 'https://polytech-kolomna.ru/images/stories/nir/snk-2024/1.jpg',
			link: '/'
		},
		{
			id: 7,
			name: 'Международная научно-практическая конференция "Развитие человеческого капитала в России: вызовы и перспективы"',
			image:
				'https://static.tildacdn.com/tild6231-3564-4031-b233-646132616165/maef-program.jpg',
			link: '/'
		},
		{
			id: 8,
			name: 'International Conference Scientific and Technological Development of the Agro-Industrial Complex for the Purposes of Sustainable Development (STDAIC-2023)',
			image:
				'https://www.groteck.com/hs-fs/hubfs/Digital/SS/SS_ADAPT/AGROTECH.%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8%20%D0%B2%20%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%BC%20%D1%85%D0%BE%D0%B7%D1%8F%D0%B8%CC%86%D1%81%D1%82%D0%B2%D0%B5.jpg?width=4173&name=AGROTECH.%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8%20%D0%B2%20%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%BC%20%D1%85%D0%BE%D0%B7%D1%8F%D0%B8%CC%86%D1%81%D1%82%D0%B2%D0%B5.jpg',
			link: '/'
		}
	]
	const rates = [
		{
			name: 'Статьи в зарубежных периодических изданиях',
			value: 14
		},
		{
			name: 'Статьи в отечественных периодических изданиях',
			value: 14
		},
		{
			name: 'Монографии',
			value: 5
		},
		{
			name: 'Учебно-методическая литература',
			value: 8
		}
	]
	const ratesImages = [
		'https://mospolytech.ru/upload/medialibrary/fb2/1st246l8vb7joqb4qi1cv0dn6aol33nj/BJ4A7701.JPG',
		'https://mospolytech.ru/upload/iblock/2d3/lckfg4041dq0geczu27b20o2fho0xe6u/BJ4A7611.JPG'
	]
	const rfn = 2
	const perspectives = [
		'Защита сотрудниками диссертаций и участия сотрудников в работе диссертационных советов',
		'Повышению индекса цитируемости в Web of Science и Scopus, а также индекса Хирша в РИНЦ',
		'Подача заявок и участие в международных и национальных научных конкурсах, программах и проектах'
	]
	const perspectivesImage =
		'https://mospolytech.ru/upload/medialibrary/583/wqh3sf52off0pcfcgfiznrw89n29418l/BJ4A7714.JPG'
	return (
		<main className="science">
			<div className="science__wrapper">
				<div className="science__info">
					<h1 className="science__title">
						Научная деятельность
						<br />
						кафедры Менеджмент
						<br />
						Московского Политеха
					</h1>
				</div>
				<div className="science__card">
					<RatesCard rates={rates} rfn={rfn} year={2023} images={ratesImages} />
					<PerspectivesCard
						perspectives={perspectives}
						image={perspectivesImage}
					/>
				</div>
				<ul className="science__events">
					{events.map(event => (
						<li key={event.id} className="science__event">
							<Event name={event.name} link={event.link} image={event.image} />
						</li>
					))}
				</ul>
			</div>
		</main>
	)
}

export default Science

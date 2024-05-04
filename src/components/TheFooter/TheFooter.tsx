import './TheFooter.css'
import { Link } from 'react-router-dom'
import linkIcon from '@assets/btn-link.svg'
import linkIconAccent from '@assets/btn-link-accent.svg'

function TheFooter() {
	const date = new Date()
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__content">
					<div className="footer__info">
						<h4 className="footer__title">
							Выбирай программы кафедры Менеджмент
						</h4>
						<p className="footer__desc">
							Факультет: Экономики и управления Московского политехнического
							университета, 2024
						</p>
					</div>
					<div className="footer__col">
						<h5 className="footer__name">Навигация</h5>
						<ul className="footer__list">
							<li className="footer__item">
								<Link
									to="/"
									className={
										window.location.pathname === '/'
											? 'footer__link footer__link--active'
											: 'footer__link'
									}
								>
									Главная
								</Link>
							</li>
							<li className="footer__item">
								<Link
									to="/about"
									className={
										window.location.pathname === '/about'
											? 'footer__link footer__link--active'
											: 'footer__link'
									}
								>
									О&nbsp;кафедре
								</Link>
							</li>
							<li className="footer__item">
								<Link
									to="/programs"
									className={
										window.location.pathname === '/programs'
											? 'footer__link footer__link--active'
											: 'footer__link'
									}
								>
									Программы обучения
								</Link>
							</li>
							<li className="footer__item">
								<Link
									to="/news"
									className={
										window.location.pathname === '/news'
											? 'footer__link footer__link--active'
											: 'footer__link'
									}
								>
									Новости
								</Link>
							</li>
							<li className="footer__item">
								<Link
									to="/science"
									className={
										window.location.pathname === '/science'
											? 'footer__link footer__link--active'
											: 'footer__link'
									}
								>
									Наука
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer__col">
						<h5 className="footer__name">Контакты</h5>
						<ul className="footer__list">
							<li className="footer__item">
								<a href="vk.com" className="footer__link">
									Вконтакте
								</a>
							</li>
							<li className="footer__item">
								<a href="tm.com" className="footer__link">
									Телеграм
								</a>
							</li>
							<li className="navigation__item ">
								<a href="tel:+7(922)890-34-32" className="footer__link">
									+7(922)890-34-32
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__col">
						<div className="footer__despatch despatch">
							<h6 className="despatch__title">Авторизация</h6>
							<Link className="despatch__link" to="/my">
								Личный кабинет
								<img
									src={linkIcon}
									height="50"
									width="50"
									alt="Icon link"
									className="despatch__icon"
								/>
							</Link>
						</div>
						<div className="footer__despatch despatch">
							<h6 className="despatch__title">Остались вопросы</h6>
							<Link className="despatch__link" to="/contact">
								Связаться
								<img
									src={linkIconAccent}
									height="50"
									width="50"
									alt="Icon link"
									className="despatch__icon"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__other">
				<p className="footer__author">PolyWeb, Московский Политех ©2024</p>
				<div className="footer__details">
					<p className="footer__detail">Москва</p>
					<p className="footer__detail">23°C</p>
					<p className="footer__detail">
						{date.getHours()}:{date.getMinutes()}
					</p>
				</div>
			</div>
		</footer>
	)
}

export default TheFooter

import './TheHeader.css'
import logo from '@assets/logo.svg'
import TheButton from '../TheButton/TheButton'
import { Link, useLocation } from 'react-router-dom'

function TheHeader({ showAuth }: { showAuth: () => void }) {
	const location = useLocation()
	return (
		<header className="header">
			<a href="/" className="header__logo-link">
				<span className="header__logo-label visually-hidden">
					Логотип веб-сайта
				</span>
				<img
					src={logo}
					alt="Изображение логотипа"
					className="header__logo-image"
				/>
			</a>
			<nav className="header__navigation navigation">
				<ul className="navigation__list">
					<li className="navigation__item">
						<Link
							to="/"
							className={
								location.pathname === '/'
									? 'navigation__link navigation__link--active'
									: 'navigation__link'
							}
						>
							Главная
						</Link>{' '}
					</li>
					<li className="navigation__item">
						<Link
							to="/about"
							className={
								location.pathname === '/about'
									? 'navigation__link navigation__link--active'
									: 'navigation__link'
							}
						>
							О&nbsp;кафедре
						</Link>
					</li>
					<li className="navigation__item">
						<Link
							to="/programs"
							className={
								location.pathname === '/programs'
									? 'navigation__link navigation__link--active'
									: 'navigation__link'
							}
						>
							Программы
						</Link>
					</li>
					<li className="navigation__item">
						<Link
							to="/news"
							className={
								location.pathname === '/news'
									? 'navigation__link navigation__link--active'
									: 'navigation__link'
							}
						>
							Новости
						</Link>
					</li>
					<li className="navigation__item">
						<Link
							to="/science"
							className={
								location.pathname === '/science'
									? 'navigation__link navigation__link--active'
									: 'navigation__link'
							}
						>
							Наука
						</Link>
					</li>
					<li className="navigation__item">
						<Link
							to="/contact"
							className={
								location.pathname === '/contact'
									? 'navigation__link navigation__link--active'
									: 'navigation__link'
							}
						>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
			<TheButton onClick={showAuth} border mini>
				Войти
			</TheButton>
		</header>
	)
}

export default TheHeader

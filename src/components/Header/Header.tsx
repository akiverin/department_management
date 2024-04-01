import './Header.css'
import logo from '@assets/logo.svg'
import TheButton from '../TheButton/TheButton'

function Header() {
  return (
    <header className="header">
        <a href="/" className="header__logo-link">
            <span className="header__logo-label visually-hidden">Логотип веб-сайта</span>
            <img src={logo} alt="Изображение логотипа" className="header__logo-image" />
        </a>
        <nav className="header__navigation navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/" className={window.location.pathname === '/' ? "navigation__link navigation__link--active" : "navigation__link"}>Главная</a>            </li>
            <li className="navigation__item">
              <a href="/about" className={window.location.pathname === '/about' ? "navigation__link navigation__link--active" : "navigation__link"}>О&nbsp;кафедре</a>
            </li>
            <li className="navigation__item">
              <a href="/programs" className={window.location.pathname === '/programs' ? "navigation__link navigation__link--active" : "navigation__link"}>Программы</a>
            </li>
            <li className="navigation__item">
              <a href="/news" className={window.location.pathname === '/news' ? "navigation__link navigation__link--active" : "navigation__link"}>Новости</a>
            </li>
            <li className="navigation__item">
              <a href="/science" className={window.location.pathname === '/science' ? "navigation__link navigation__link--active" : "navigation__link"}>Наука</a>
            </li>
            <li className="navigation__item">
              <a href="/contact" className={window.location.pathname === '/contact' ? "navigation__link navigation__link--active" : "navigation__link"}>Контакты</a>
            </li>
          </ul>
        </nav>
        <TheButton href="/contact" border mini>Связаться</TheButton>
    </header>
  )
}

export default Header

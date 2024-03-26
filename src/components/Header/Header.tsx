import './Header.css'
import logo from '@assets/logo.svg'

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
              <a href="/" className="navigation__link navigation__link--active">Главная</a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">О&nbsp;кафедре</a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">Программы</a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">Новости</a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">Наука</a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">Контакты</a>
            </li>
          </ul>
        </nav>
        <a href="/" className="header__contact-link">Связаться</a>
    </header>
  )
}

export default Header

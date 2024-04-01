import TheButton from '@/components/TheButton/TheButton'
import coverHero from '@assets/cover-hero.jpeg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
        <div className="hero__wrapper">
            <div className="hero__info">
                <div className="hero__welcome">
                    <div className="hero__wave">👋</div>
                    <p className="hero__greetings">
                        Привет, самое время поступить на Менеджмент!
                    </p>
                </div>
                <div className="hero__titles">
                    <h1 className="hero__title hero__title--name">Кафедра Менеджмент</h1>
                    <h1 className="hero__title hero__title--university">Московский Политех</h1>
                    <h1 className="hero__title hero__title--slogan">Изучай и практикуйся!</h1>
                </div>
                <p className="hero__desc">
                    В процессе обучения вы сможете приобрести управленческие компетенции, научиться командной работе, получить организаторские качества.
                </p>
                <div className="hero__actions">
                    <TheButton to={"/programs"} shadow accent>Программы</TheButton>
                    <TheButton to={"/contact"}>Связаться</TheButton>
                </div>
            </div>
            <div className="hero__cover">
                <img src={coverHero} alt="Обложка первой секции на Главной странице" className="hero__image" />
            </div>
        </div>
    </section>
  )
}

export default Hero

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
            </div>
        </div>
    </section>
  )
}

export default Hero

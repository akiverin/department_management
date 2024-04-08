import Rubric from '@components/Rubric/Rubric'
import './Skills.css'
import creation from '@assets/skills/creation.svg'
import tech from '@assets/skills/tech.svg'
import presentation from '@assets/skills/presentation.svg'
import time from '@assets/skills/time.svg'
import arrowKnot from '@assets/arrow-knot.svg'
import arrowLong from '@assets/arrow-long.svg'
import starBig from '@assets/star-big.svg'

function Skills() {
    const skills = [
        {
            id: 1,
            name: "Управление развитием организации",
            image: creation,
        },
        {
            id: 2,
            name: "Информационные технологии Менеджмента",
            image: tech,
        },
        {
            id: 3,
            name: "Управление технологиями создания проектов",
            image: presentation,
        },
        {
            id: 4,
            name: "Стартап-менеджмент и основы малого бизнеса",
            image: time,
        }
    ]
    return (
        <section className="skills">
            <div className="skills__wrapper">
                <div className="skills__info">
                    <Rubric>Чему я смогу научиться?</Rubric>
                    <h2 className="skills__title">
                        Навыки, которые Вы получите
                    </h2>
                    <p className="skills__desc">
                        Сбалансированный подход к овладению ключевыми навыками, необходимыми для успешного управления людьми, ресурсами и проектами.
                    </p>
                    <img src={arrowKnot} alt="Декоративная стрелка с узлом" height={120} width={120} className="skills__arrow-knot" />
                    <div className="skills__terms">
                        <h3 className="skills__term skills__term--center">Управление</h3>
                        <div className="skills__arrow-term">
                            <img src={arrowLong} width={280} height={58} alt="Декоративная длинная стрелка" className="skills__arrow-long" />
                            <h3 className="skills__term">Бизнес</h3>
                        </div>
                        <div className="skills__star-term">
                            <h3 className="skills__term">Менеджмент</h3>
                            <img src={starBig} alt="Декоративная большая звездочка" className="skills__star-big" />
                        </div>
                        <h3 className="skills__term skills__term--right">Проекты</h3>
                    </div>
                </div>
                <ul className="skills__cards">
                    {skills.map(skill => (
                        <li className="skills__card">
                            <img src={skill.image} alt="Изображение навыка" className="skills__image" />
                            <h4 className="skills__name">{skill.name}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skills

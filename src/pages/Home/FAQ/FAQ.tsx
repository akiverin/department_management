import Rubric from '@components/Rubric/Rubric'
import './FAQ.css'
import TheButton from '@/components/TheButton/TheButton'
import imageDetail from '@assets/time-detail.svg'
import RowQuestion from './RowQuestion/RowQuestion'

function FAQ() {
    const questions = [
        {
            id: 1,
            question: "Какие дисциплины я буду изучать?",
            answer: "Какие дисциплины я буду изучать?",
        },
        {
            id: 2,
            question: "Какие профессии я смогу освоить на программах?",
            answer: "Какие профессии я смогу освоить на программах?",
        },
        {
            id: 3,
            question: "Какие сдавать экзамены, чтобы поступить на направление подготовки «Менеджмент»?",
            answer: "Какие сдавать экзамены, чтобы поступить на направление подготовки «Менеджмент»?",
        },
        {
            id: 4,
            question: "Какие проходные баллы на 2024 год?",
            answer: "Какие проходные баллы на 2024 год?",
        },
        {
            id: 5,
            question: "Стоимость обучения на программах",
            answer: "Стоимость обучения на программах",
        },
        {
            id: 6,
            question: "Сколько я смогу зарабатывать после обучения?",
            answer: "Сколько я смогу зарабатывать после обучения?",
        },
        {
            id: 7,
            question: "Какая сложность учебной программы?",
            answer: "Какая сложность учебной программы?",
        },
        {
            id: 8,
            question: "Как оценить свои шансы на поступление?",
            answer: "Как оценить свои шансы на поступление?",
        },
        {
            id: 9,
            question: "Существуют ли какие-либо практики?",
            answer: "Существуют ли какие-либо практики?",
        },
    ]
    return (
        <section className="faq">
            <div className="faq__wrapper">
                <div className="faq__info">
                    <Rubric>Часто задаваемые вопросы</Rubric>
                    <h2 className="faq__title">
                        Ответы на Ваши вопросы
                    </h2>
                    <p className="faq__desc">
                        Остались вопросы? Свяжитесь с нами!
                    </p>
                    <div className="faq__detail">
                        <img src={imageDetail} alt="" className="faq__image" />
                        <h3 className="faq__detail-question">Как повысить свои шансы на поступление?</h3>
                        <TheButton to="/" dark shadow>Узнать подробнее</TheButton>
                    </div>
                </div>
                <ul className="faq__list">
                    {questions.map(question => (
                        <li className="faq__card">
                            <RowQuestion answer={question.answer}>{question.question}</RowQuestion>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FAQ

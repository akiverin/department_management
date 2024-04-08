import Rubric from '@components/Rubric/Rubric'
import './ProgramsSection.css'
import ProgramCard from './ProgramCard/ProgramCard'
import TheButton from '@/components/TheButton/TheButton'

function ProgramsSection() {
  const programs = [
    {
      id: 1,
      level: "Бакалавриат",
      name: "Управление бизнес-процессами",
      code: "38.03.02",
      desc: "Оптимизация ключевых операций для максимальной эффективности компании.",
      budget_places: 36,
      paid_places: 150,
      disciplines: [
        "Картирование и анализ бизнес-процессов",
        "Внедрение методик бережливого производства",
        "Оптимизация рабочих потоков",
        "Автоматизация ключевых бизнес-операций",
        "Управление качеством продукции/услуг",
        "Создание центров обработки данных",
        "Управление жизненным циклом продукта",
      ],
      link: "/"
    },
    {
      id: 2,
      level: "Магистратура",
      name: "Управление проектами",
      code: "38.04.02",
      desc: "Структурированный подход по достижению собственных целей в установленные сроки.",
      paid_places: 30,
      disciplines: [
        "Планирование сроков и ресурсов проекта",
        "Управление командой и распределение задач",
        "Контроль выполнения и отклонений проекта",
        "Управление рисками и минимизация угроз",
        "Обеспечение качества проектных работ",
        "Применение гибких методологий управления",
        "Использование проектного ПО",
        "Финансовое планирование и контроль бюджета",
        "Управление коммуникациями и отчетностью",
        "Оценка экономической эффективности изменений",
        "Реинжиниринг бизнес-процессов"
      ],
      link: "/"
    }
  ]
  return (
    <section className="programs">
      <div className="programs__wrapper">
        <div className="programs__info">
          <Rubric>Программы обучения</Rubric>
          <h2 className="programs__title">
            Выбери программу обучения в Политехе
          </h2>
          <p className="programs__desc">
            Получи всестороннее развитие лидерских и управленческих компетенций в управлении и менеджменте!
          </p>
        </div>
        <ul className="programs__cards">
          {programs.map(program => (
          <li className="programs__card">
            <ProgramCard program={program}/>
          </li>
          ))}
        </ul>
        <div className="programs__help-programs help-programs">
            <div className="help-programs__info">
              <h4 className="help-programs__title">Нужна помощь с выбором программы?</h4>
              <p className="help-programs__desc">Если у вас остались вопросы или вам необходима помощь с выбором программы обучения, то свяжитесь с нами!</p>
            </div>
            <div className="help-programs__actions">
              <TheButton to="/" border light>Написать</TheButton>
              <TheButton to="/" gray>Позвонить</TheButton>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection

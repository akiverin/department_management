import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found">
        <div className="not-found__wrapper">
            <h1 className="not-found__title">Ошибка 404</h1>
            <p className="not-found__desc">Упс! Кажется, вы попали не туда, куда хотели. Запрашиваемая страница не найдена.</p>
        </div>
    </main>
  )
}

export default NotFound
import React, { useState } from "react";
import './RowQuestion.css'
import plus from '@assets/plus.svg'

function RowQuestion({ children, answer }: RowQuestionProps) {
    const [active, setActive] = useState(false)
    return (
        <>
            <button onClick={() => setActive(!active)} className="row-question">
                <h3 className="row-question__text">
                    { children }
                </h3>
                <div className="row-question__button">
                    <span className="visually-hidden">Раскрыть вопрос</span>
                    <img src={plus} alt="Иконка открытия плюс" className="row-question__plus" />
                </div>
            </button>
            <div className={active ? "row-answer row-answer--active" : "row-answer"}>
                <p className="row-answer__text">
                    { answer }
                </p>
            </div>
        </>
    )
}

type RowQuestionProps = {
  children: React.ReactNode;
  answer: string;
}


export default RowQuestion

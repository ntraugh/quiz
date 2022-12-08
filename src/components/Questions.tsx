import React from 'react'

type quizInfoProps = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number; 
}

const Questions: React.FC<quizInfoProps> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions}) => {

  return (
    <div>
        <p className='questionNumber'>Question: {questionNumber} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map((answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            )))}
        </div>
    </div>
  )
}

export default Questions
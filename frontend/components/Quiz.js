import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, setMessage, postAnswer } from '../state/action-creators';

export function Quiz(props) {

  const { quiz } = props

  useEffect(
    () => {
      props.fetchQuiz()
    }, [])

  const handleSelect = id => {
    props.selectAnswer(id)
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    props.postAnswer({ quiz_id: props.quiz.quiz_id, answer_id: props.selectedAnswer})
  }

  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`${props.selectedAnswer == quiz.answers[0].answer_id ? 'answer selected' : 'answer'}`}>
              {quiz.answers[0].text}
                <button onClick={() => handleSelect(quiz.answers[0].answer_id)}>
                  {props.selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`${props.selectedAnswer == quiz.answers[1].answer_id ? 'answer selected' : 'answer'}`}>
              {quiz.answers[1].text}
                <button onClick={() => handleSelect(quiz.answers[1].answer_id)}>
                {props.selectedAnswer == quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button disabled={!props.selectedAnswer} onClick={handleSubmit} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, setMessage, postAnswer })(Quiz);

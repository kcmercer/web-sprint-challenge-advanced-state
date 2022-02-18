import React from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, setMessage } from '../state/action-creators';

export function Quiz(props) {
  const grabQuiz = () => {
    props.fetchQuiz()
  }

  let quizCheck = props.quiz !== '';

  const selectedAnswerArray = Object.values(props.selectedAnswer)
  const selectedAnswerString = selectedAnswerArray.toString()

  let answerCheck = selectedAnswerString !== '';

  const handleSelect = evt => {
    props.selectAnswer(evt.target.value)

    if (selectedAnswerString == props.quiz.answers[0].text) {
      props.setMessage('That is correct')
    } else {
      props.setMessage('That is a shame')
    }
  }

  return (
    <div id="wrapper">
      {
        quizCheck ==
        true ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={selectedAnswerString == props.quiz.answers[0].text ? 'answer selected' : 'answer'} value={props.quiz.answers[0].text}>
              {props.quiz.answers[0].text}
                <button value={props.quiz.answers[0].text} onClick={handleSelect}>
                  {selectedAnswerString === props.quiz.answers[0].text ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={selectedAnswerString === props.quiz.answers[1].text ? 'answer selected' : 'answer'} value={props.quiz.answers[1].text}>
              {props.quiz.answers[1].text}
                <button value={props.quiz.answers[1].text} onClick={handleSelect}>
                {selectedAnswerString == props.quiz.answers[1].text ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button disabled={answerCheck === true ? false : true} onClick={grabQuiz} id="submitAnswerBtn">Submit answer</button>
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

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, setMessage })(Quiz);

import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log(props.newQuiz)

  const onChange = evt => {

    if (evt.target.id === 'newQuestion') {
      props.inputChange(evt.target.value)
    } else if (evt.target.id === 'newTrueAnswer') {
      props.inputChange2(evt.target.value)
    } else if (evt.target.id === 'newFalseAnswer') {
      props.inputChange3(evt.target.value)
    } else {
      console.log('Where are you even typing..?')
    }
  }

  const quizQuestion = props.newQuiz.question_text

  const onSubmit = evt => {
    evt.preventDefault();

    props.setMessage(quizQuestion)
    
    const newQuestion = document.querySelector('#newQuestion')
    const newTrueAnswer = document.querySelector('#newTrueAnswer')
    const newFalseAnswer = document.querySelector('#newFalseAnswer')
    newQuestion.value = ''
    newTrueAnswer.value = ''
    newFalseAnswer.value = ''

    props.postQuiz(props.newQuiz)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input required maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input required maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input required maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    newQuiz: {
      question_text: state.form.newQuestion,
      true_answer_text: state.form.newTrueAnswer,
      false_answer_text: state.form.newFalseAnswer }
  }
}


export default connect(mapStateToProps, actionCreators)(Form)

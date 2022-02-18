import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log(props.newQuiz)

  const onChange = evt => {
    const { id, value } = evt.target
    const newQ = {...props.form, [id]: value}
    props.inputChange(newQ)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    const questionInput = document.querySelector('#newQuestion')
    const trueAnswerInput = document.querySelector('#newTrueAnswer')
    const falseAnswerInput = document.querySelector('#newFalseAnswer')

    questionInput.value = ''
    trueAnswerInput.value = ''
    falseAnswerInput.value = ''

    props.postQuiz({
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer
    })
  }

  const disabled =
  props.form.newQuestion.trim('').length > 0 &&
  props.form.newTrueAnswer.trim('').length > 0 &&
  props.form.newFalseAnswer.trim('').length > 0

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input required maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input required maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input required maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={!disabled} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)

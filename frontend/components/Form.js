import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios';

export function Form(props) {
  console.log(props.newQuiz)

  const onChange = evt => {
    props.inputChange({
      [evt.target.id]: evt.target.value
    })
  }

  const onSubmit = evt => {

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
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

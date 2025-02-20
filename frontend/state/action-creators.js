// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types';
import axios from 'axios';

// Wheel Acions
export function moveClockwise(x) {
  return ({type: types.MOVE_CLOCKWISE, payload: x})
}

export function moveCounterClockwise() {
  return ({type: types.MOVE_COUNTERCLOCKWISE})
}

export function wheelClockwiseReset() {
  return({type: types.WHEEL_CLOCKWISE_RESET})
}

export function wheelCounterClockwiseReset() {
  return({type: types.WHEEL_COUNTERCLOCKWISE_RESET})
}

// Quiz Actions
export function selectAnswer(answerId) {
  return({type: types.SET_SELECTED_ANSWER, payload: answerId})
}

export function setMessage(value) {
  return ({type: types.SET_INFO_MESSAGE, payload: value})
}

export function setQuiz(question) {
  return ({type: types.SET_QUIZ_INTO_STATE, payload: question})
}

// Form Actions
export function inputChange(value) {
  return(console.log(value), {type: types.INPUT_CHANGE, payload: value})
}

export function inputChange2(value) {
  return(console.log(value), {type: types.INPUT_CHANGE2, payload: value})
}

export function inputChange3(value) {
  return(console.log(value), {type: types.INPUT_CHANGE3, payload: value})
}

export function resetForm() {
  return({type: types.RESET_FORM})
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state

    axios.get('http://localhost:9000/api/quiz/next')
    .then(resp => {
      console.log(resp.data)
      dispatch(setQuiz(resp.data))
    }) .catch (error => {
      console.log(error)
    })
  }
}

// BAD dont do this

// export const fetchQuiz = () => dispatch => {

//       axios.get('http://localhost:9000/api/quiz/next')
//     .then(resp => {
//       console.log(resp.data)
//       dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: resp.data})
//     }) .catch (error => {
//       console.log(error)
//     })
// }

export function postAnswer({quiz_id, answer_id}) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz

    axios.post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id})
      .then(resp => {
        console.log(resp)
        dispatch(setMessage(resp.data.message))
        dispatch(selectAnswer(null))
        dispatch(setQuiz(null))
        dispatch(fetchQuiz())
      }) .catch (error => {
        console.log(error)
      })
  }
}

export function postQuiz({question_text, true_answer_text, false_answer_text}) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form

    axios.post('http://localhost:9000/api/quiz/new', {question_text, true_answer_text, false_answer_text})
      .then(resp => {
        console.log(resp.data)
        dispatch(setMessage(`Congrats: "${resp.data.question}" is a great question!`))
        dispatch(resetForm())
      }) .catch (error => {
        console.log(error)
      })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

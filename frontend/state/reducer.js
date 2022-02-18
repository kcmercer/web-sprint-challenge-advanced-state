// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types';

const initialWheelState = {
  wheelCounter: 0
}

function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case types.MOVE_CLOCKWISE:
      return {
        ...state,
        wheelCounter: state.wheelCounter + 1
      }
    
    case types.MOVE_COUNTERCLOCKWISE:
      return {
        ...state,
        wheelCounter: state.wheelCounter - 1
      }

    case types.WHEEL_CLOCKWISE_RESET:
      return {
        ...state,
        wheelCounter: 0
      }

      case types.WHEEL_COUNTERCLOCKWISE_RESET:
        return {
          ...state,
          wheelCounter: 5
        }
    
    default:
      return state
  }
}

const initialQuizState = {
  quiz_id: 'LWKA',
  question: 'What is Closure?',
  answers: [
    {
      answer_id: '121fa',
      text: 'A function',
    },
    {
      answer_id: 'awdaw51',
      text: 'An Elephant',
    }
  ]
}

function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE:
      return {
        quiz_id: action.payload.quiz_id,
        question: action.payload.question,
        answers: [
          {
            answer_id: action.payload.answers[0].answer_id,
            text: action.payload.answers[0].text
          },
          {
            answer_id: action.payload.answers[1].answer_id,
            text: action.payload.answers[1].text
          }
        ]
      }

    default:
      return state
  }
}

const initialSelectedAnswerState = {
  selectedAnswer: ''
}

function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case types.SET_SELECTED_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload
      }
    
    default:
      return state
  }
}

const initialMessageState = {
  message: '',
}

function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case types.SET_INFO_MESSAGE:
      return {
        ...state,
        message: action.payload
      }

    default:
      return state
        
      }
  }

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

function form(state = initialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        newQuestion: action.payload
      }
    case types.INPUT_CHANGE2:
      return {
        ...state,
        newTrueAnswer: action.payload
      }
    case types.INPUT_CHANGE3:
      return {
        ...state,
        newFalseAnswer: action.payload
      }
    case types.RESET_FORM:
      return {
        ...state,
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: ''
      }
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

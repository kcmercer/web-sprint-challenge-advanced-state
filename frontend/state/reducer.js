// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, INPUT_CHANGE, RESET_FORM, WHEEL_CLOCKWISE_RESET, WHEEL_COUNTERCLOCKWISE_RESET } from './action-types';

const initialWheelState = {
  wheelCounter: 0
}

function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return {
        ...state,
        wheelCounter: state.wheelCounter + 1
      }
    
    case MOVE_COUNTERCLOCKWISE:
      return {
        ...state,
        wheelCounter: state.wheelCounter - 1
      }

    case WHEEL_CLOCKWISE_RESET:
      return {
        ...state,
        wheelCounter: 0
      }

      case WHEEL_COUNTERCLOCKWISE_RESET:
        return {
          ...state,
          wheelCounter: 5
        }
    
    default:
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        newQuestion: action.payload.newQuestion,
        newTrueAnswer: action.payload.newTrueAnswer,
        newFalseAnswer: action.payload.newFalseAnswer
        
      }
    case RESET_FORM:
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

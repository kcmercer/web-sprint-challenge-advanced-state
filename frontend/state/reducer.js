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

const initialQuizState = []
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE:
      return [...state, action.payload], console.log(state)

    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = {
  message: '',
}

function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case types.SET_INFO_MESSAGE:
      return {
        ...state,
        message: action.payload + 'is a great question!'
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

import { 
    UPDATE_QUESTIONS,
    CALL_QUESTIONS_API,
    GET_QUESTIONS,
} from '../constants';

import { getQuestions } from '../../api/Questions';

const pageIndexMapper = questionType => {
    switch(questionType)
    {
        case 'INTRO': return 1;
        case 'ALGO': return 2;
        case 'KEYGEN': return 3;
        case 'ENCRYPT': return 4;
        case 'DECRYPT': return 5;
        default: return 1;
    }
}

export const ADD_QUESTIONS_API_ACTION = (questions, quizType) => {
    return {
        type: CALL_QUESTIONS_API,
        payload: {
           questions: questions,
           quizType: quizType,
        }
    }
}
export const GET_QUESTIONS_ACTION = questionType => {
    return {
        type: GET_QUESTIONS,
        payload: {
            questionType: pageIndexMapper(questionType),
        }
    }
}

/* Redux thunk actions */
export const CALL_API = (quizType) => async dispatch => {
    const succ = (data) => {
        console.log(`Dispatching ${data.results}`)
        dispatch(ADD_QUESTIONS_API_ACTION(data.results, quizType));
    }
    const err = (err)=> {
        console.log(err);
    }
    let idx = pageIndexMapper(quizType);
    console.log(`${quizType} - ${idx}`)
    getQuestions(idx, succ, err);
}
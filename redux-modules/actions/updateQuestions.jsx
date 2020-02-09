import { UPDATE_QUESTIONS, CALL_QUESTIONS_API, GET_QUESTIONS } from '../constants';

import { getQuestions } from '../../api/Questions';

const pageIndexMapper = questionType => {
  switch (questionType) {
    case 'INTRO':
      return 1;
    case 'ALGO':
      return 2;
    case 'KEYGEN':
      return 3;
    case 'ENCRYPT':
      return 4;
    case 'DECRYPT':
      return 5;
    default:
      return 1;
  }
};

export const ADD_QUESTIONS_API_ACTION = (questions, quizType) => {
  return {
    type: CALL_QUESTIONS_API,
    payload: {
      questions,
      quizType,
    },
  };
};
export const GET_QUESTIONS_ACTION = questionType => {
  return {
    type: GET_QUESTIONS,
    payload: {
      questionType: pageIndexMapper(questionType),
    },
  };
};

/* Redux thunk actions */
export const CALL_API = quizType => async dispatch => {
  let isPaginatedFinish = false;
  let pageNo = 1;
  const succ = data => {
    dispatch(ADD_QUESTIONS_API_ACTION(data.results, quizType));
  };
  const err = err => {
    console.log(err);
  };
  const idx = pageIndexMapper(quizType);
  while (!isPaginatedFinish) {
    const apiData = await getQuestions(idx, pageNo, succ, err);
    if ('has_next' in apiData && apiData.has_next) {
      pageNo += 1;
    } else {
      isPaginatedFinish = true;
      console.log(`Called api finish for ${quizType}, page ${pageNo}`);
    }
  }
};

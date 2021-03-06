import { CALL_QUESTIONS_API } from '../constants';

const initialState = {
  intro: [],
  algo: [],
  keygen: [],
  encrypt: [],
  decrypt: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALL_QUESTIONS_API:
      switch (action.payload.quizType) {
        case 'INTRO':
          return {
            ...state,
            intro: [
              ...state.intro,
              ...action.payload.questions.map(x => ({
                ...x,
                options: x.options.map(y => ({
                  ...y,
                  selected: y.selected === 1 ? 0 : y.selected, // reset the selected value,
                })),
                answer: x.options.find(y => y.selected === 1).value,
              })),
            ],
          };
        case 'ALGO':
          return {
            ...state,
            algo: [
              ...state.algo,
              ...action.payload.questions.map(x => ({
                ...x,
                options: x.options.map(y => ({
                  ...y,
                  selected: y.selected === 1 ? 0 : y.selected, // reset the selected value,
                })),
                answer: x.options.find(y => y.selected === 1).value,
              })),
            ],
          };
        case 'KEYGEN':
          return {
            ...state,
            keygen: [
              ...state.keygen,
              ...action.payload.questions.map(x => ({
                ...x,
                options: x.options.map(y => ({
                  ...y,
                  selected: y.selected === 1 ? 0 : y.selected, // reset the selected value,
                })),
                answer: x.options.find(y => y.selected === 1).value,
              })),
            ],
          };
        case 'ENCRYPT':
          return {
            ...state,
            encrypt: [
              ...state.encrypt,
              ...action.payload.questions.map(x => ({
                ...x,
                options: x.options.map(y => ({
                  ...y,
                  selected: y.selected === 1 ? 0 : y.selected, // reset the selected value,
                })),
                answer: x.options.find(y => y.selected === 1).value,
              })),
            ],
          };
        case 'DECRYPT':
          return {
            ...state,
            decrypt: [
              ...state.decrypt,
              ...action.payload.questions.map(x => ({
                ...x,
                options: x.options.map(y => ({
                  ...y,
                  selected: y.selected === 1 ? 0 : y.selected, // reset the selected value,
                })),
                answer: x.options.find(y => y.selected === 1).value,
              })),
            ],
          };
        default:
          return {
            ...state,
          };
      }

    default:
      return state;
  }
};

export default questionReducer;

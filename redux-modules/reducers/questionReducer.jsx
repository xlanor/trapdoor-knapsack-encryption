import {
    CALL_QUESTIONS_API
} from '../constants';

const initialState = {
    intro: [

    ],
    algo: [

    ],
    keygen: [

    ],
    encrypt: [

    ], 
    decrypt: [

    ],
}

const questionReducer = ( state=initialState, action ) => {
    console.log(`Received ${JSON.stringify(action)}`)
    switch(action.type){
        case CALL_QUESTIONS_API:
            console.log(action.payload.quizType)
            switch(action.payload.quizType){
                case 'INTRO':
                    return {
                        ...state,
                        intro: action.payload.questions.map(x => ({
                                ...x,
                                options: x.options.map(y => ({
                                        ...y,
                                        selected: y.selected === 1 ? 0: y.selected, // reset the selected value,
                                    })
                                ),
                                answer: x.options.find(y => y.selected === 1).value
                            })
                        )
                    }
                default:
                    return {
                        ...state,
                    }
            }
          
        default:
            return state;

    }
}

export default questionReducer;
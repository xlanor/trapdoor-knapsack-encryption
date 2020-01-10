import {
    HINT_SELECT,
    HINT_DONE,
    HINT_NOTDONE,
    RESET_HINT,
} from '../constants'

export const HINT_SELECT_ACTION = () => {
    return {
        type: HINT_SELECT,
        payload: 'hint'
    }
}
export const HINT_DONE_ACTION = () => {
    return {
        type: HINT_DONE
    }
}
export const HINT_NOTDONE_ACTION = () => {
    return {
        type: HINT_NOTDONE
    }
}
export const RESET_HINT_ACTION = ()=>{
    return{
        type: RESET_HINT
    }
}
import {
    HINT_DONE,
    HINT_NOTDONE,
    RESET_ALL,
    UNLOCK_ALL,
} from '../constants'

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
export const HINT_RESET_ACTION = () => {
    return {
        type: RESET_ALL
    }
}
export const HINT_UNLOCK_ACTION = () => {
    return {
        type: UNLOCK_ALL
    }
}
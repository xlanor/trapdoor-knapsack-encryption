import {
    LINKS_HINT_DONE,
    LINKS_HINT_NOTDONE,
    RESET_ALL,
    UNLOCK_ALL,
} from '../constants'

export const LINKS_HINT_DONE_ACTION = () => {
    return {
        type: LINKS_HINT_DONE
    }
}
export const LINKS_HINT_NOTDONE_ACTION = () => {
    return {
        type: LINKS_HINT_NOTDONE
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
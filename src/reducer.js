import { combineReducers } from 'redux'

function status(state=false, action) {
    switch (action.type) {
        case 'TOGGLE_STATUS': 
            return !state
        default: 
            return state
    }
}

const portfolio = combineReducers({
    status
})

export default portfolio
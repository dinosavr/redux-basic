const ADD_CASH = "ADD_CASH"
const GET_CASH = "GET_CASH"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultState = {
    cash:100,
    isFetching: false
}


export default function cashReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                cash: state.cash + action.payload,
                isFetching: false
            }
        case GET_CASH:
            return {
                ...state,
                cash: state.cash - action.payload,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

// export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
// export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
export const setCash = (num) => ({type:ADD_CASH, payload:num})
export const getCash = (num) => ({type:GET_CASH, payload:num})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
// export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})
// export const setFetchError = (bool) => ({type:SET_FETCH_ERROR, payload:bool})

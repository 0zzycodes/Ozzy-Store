const INITIAL_STATE = {
  path: null
}

const pathReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PATH':
      return {
        ...state,
        path: action.payload
      }
      default:
        return state
  }
}

export default pathReducer
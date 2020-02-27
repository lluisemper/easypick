//DESCRIVES HOW YOUR ACTIONS TRANSFROM THE STATE TO ANOTHER STATE
const INITIAL_STATE = {
  searchInput:""
}
const uiState = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SEARCH":
      return {...state, searchInput:action.searchInput}; //update our store
    default :
      return state
  }
}

export default uiState
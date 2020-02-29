//DESCRIVES HOW YOUR ACTIONS TRANSFROM THE STATE TO ANOTHER STATE
const INITIAL_STATE = {
  searchInput:"",
  pickTag: [],
  recipes: []
}
const uiState = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SEARCH":
      return {...state, searchInput:action.searchInput}; //update our store
    case "MYTAG":
      const index = state.pickTag.indexOf(action.pickTag);
      const newPickTags = [...state.pickTag];
      if (index >= 0) newPickTags.splice(index, 1);
      else newPickTags.push(action.pickTag)
      return {...state, pickTag: newPickTags}
    case "MYRECIPERENDER":
      return {...state, recipes: action.recipes}
    default :
      return state
  }
}

export default uiState